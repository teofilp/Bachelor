using FastEndpoints;
using FastEndpoints.Swagger;

namespace AtomicHabits.Backend;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder();

        builder.Services.AddFastEndpoints();
        builder.Services.AddSwaggerDoc();

        var app = builder.Build();

        app.UseAuthorization();
        app.UseFastEndpoints();
        app.UseSwaggerGen();
        app.Run();
    }    
}