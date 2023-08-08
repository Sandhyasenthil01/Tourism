using Microsoft.EntityFrameworkCore;

namespace Travellers_Agent.Models
{
    public class AgentsContext : DbContext
    {
        public DbSet<TourPackages> Tours { get; set; }


        public DbSet<SpotImages> spot { get; set; }




        public AgentsContext(DbContextOptions<AgentsContext> options) : base(options) { }
    }
}
