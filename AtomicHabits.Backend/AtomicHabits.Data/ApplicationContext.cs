using AtomicHabits.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AtomicHabits.Data;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions options) : base(options) { }

    public virtual DbSet<User> Users { get; set; }
}