using Grpc.Net.Client;
using PBExRateGenerator;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;

public class RateControlService
{
	private CancellationTokenSource _cts;
	private bool _isStreaming;

	public RateControlService()
	{
		_isStreaming = false;
	}

	public async Task StartStreaming(WebSocket webSocket)
	{
		if (_isStreaming) return;

		_isStreaming = true;
		_cts = new CancellationTokenSource();

		using var grpcChannel = GrpcChannel.ForAddress("http://localhost:5001");
		var client = new RateGenerator.RateGeneratorClient(grpcChannel);
		var rateStream = client.GetRate(new RateRequest());

		try
		{
			while (await rateStream.ResponseStream.MoveNext(_cts.Token))
			{
				var rate = rateStream.ResponseStream.Current;

				if (_cts.Token.IsCancellationRequested) break;
                var jsonString = JsonSerializer.Serialize(rate);
                var jsonBytes = Encoding.UTF8.GetBytes(jsonString);
                var message = $"Rate: {rate.IdRate}, Value: {rate.Value}, Timestamp: {rate.TimestampGeneration}";
                await webSocket.SendAsync(
					new ArraySegment<byte>(jsonBytes),
					WebSocketMessageType.Text,
					true,
					CancellationToken.None);
			}
		}
		catch (Exception ex)
		{
		}
		finally
		{
			_isStreaming = false;
		}
	}

	public void StopStreaming()
	{
		if (_isStreaming)
		{
			_cts.Cancel();
			_isStreaming = false;
		}
	}
}
