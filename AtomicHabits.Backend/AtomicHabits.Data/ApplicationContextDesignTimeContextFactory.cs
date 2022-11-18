using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace AtomicHabits.Data;

public class ApplicationContextDesignTimeContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
{
    public ApplicationContext CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();
        
        var builder = new DbContextOptionsBuilder<ApplicationContext>();
        var connString = configuration.GetConnectionString("DefaultConnection");

        builder.UseSqlServer(connString);

        return new ApplicationContext(builder.Options);
    }
}