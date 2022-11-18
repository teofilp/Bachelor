using FastEndpoints;
using Microsoft.AspNetCore.Authorization;

namespace AtomicHabits.Backend.Endpoints;

[HttpGet("health-check"), AllowAnonymous]
public class HealthCheck : EndpointWithoutRequest<string>
{
    public override async Task HandleAsync(CancellationToken ct)
    {
        await SendAsync("Hello World!", cancellation: ct);
    }
}