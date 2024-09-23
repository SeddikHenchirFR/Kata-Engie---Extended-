using Grpc.Core;
using Google.Protobuf.WellKnownTypes;
using PBExRateGenerator;
using System;
using System.Threading.Tasks;

namespace PBExRateGenerator.Services
{
public class RateGeneratorService : RateGenerator.RateGeneratorBase
{
    private readonly Random _random = new Random();

    public override async Task GetRate(RateRequest request, IServerStreamWriter<RateResponse> responseStream, ServerCallContext context)
    {
        string[] rateIds = { "EURUSD", "EURGBP", "USDGBP" };

        while (!context.CancellationToken.IsCancellationRequested)
        {
            foreach (var rateId in rateIds)
            {
                var response = new RateResponse
                {
                    IdRate = rateId,
                    Value = _random.NextDouble() * 3,
                    TimestampGeneration = Timestamp.FromDateTime(DateTime.UtcNow)
                };
                Console.WriteLine(response.IdRate + "" + response.Value);
                await responseStream.WriteAsync(response);
                await Task.Delay(new Random().Next(1, 100)); // Random delay between 1 to 100 ms
            }
        }
    }
}
}
