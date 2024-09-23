
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<RateControlService>(); // Register your custom service

var app = builder.Build();

// Enable WebSockets
app.UseWebSockets();

// Use the GrpcWebSocketMiddleware directly in the pipeline
app.UseMiddleware<GrpcWebSocketMiddleware>();

// Define other routes or endpoints
app.MapGet("/", () => "ExRateBack is running...");

app.Run();
