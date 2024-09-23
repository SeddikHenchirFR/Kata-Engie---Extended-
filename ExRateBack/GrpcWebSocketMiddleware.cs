using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;

public class GrpcWebSocketMiddleware
{
    private readonly RequestDelegate _next;
    private readonly RateControlService _rateControlService;

    public GrpcWebSocketMiddleware(RequestDelegate next, RateControlService rateControlService)
    {
        _next = next;
        _rateControlService = rateControlService;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Path == "/ws" && context.WebSockets.IsWebSocketRequest)
        {
            using var webSocket = await context.WebSockets.AcceptWebSocketAsync();

            try
            {
                // Handle the streaming of data
                await _rateControlService.StartStreaming(webSocket);
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"WebSocket error: {ex.Message}");
            }
            
        }
        else
        {
            await _next(context); 
        }
        if (context.Request.Path == "/close" && context.WebSockets.IsWebSocketRequest)
        {
            try
            {
                // Handle the streaming of data
                _rateControlService.StopStreaming();
                Console.WriteLine($"WebSocket stopping..");
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine($"WebSocket error: {ex.Message}");
            }

        }
    }
}
