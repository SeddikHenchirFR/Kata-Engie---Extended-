using PBExRateGenerator.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<RateGeneratorService>();
app.MapGet("/", () => "PBExRateGenerator is running...");

app.Run();
