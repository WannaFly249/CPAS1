using CPAS.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CPAS.Data
{
    public class CarparkDbContext : DbContext
    {
        public DbSet<Member> Members { get; set; }

        public CarparkDbContext(DbContextOptions<CarparkDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Member>().ToTable("Members");

            modelBuilder.Entity<Member>().Property(m => m.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired().ValueGeneratedOnAdd();
            modelBuilder.Entity<Member>().Property(m => m.FirstName).HasColumnType("nvarchar(100)").IsRequired();
            modelBuilder.Entity<Member>().Property(m => m.LastName).HasColumnType("nvarchar(100)").IsRequired();
            modelBuilder.Entity<Member>().Property(m => m.Email).HasColumnType("nvarchar(100)").IsRequired();
            modelBuilder.Entity<Member>().Property(m => m.Password).HasColumnType("nvarchar(100)").IsRequired();
            modelBuilder.Entity<Member>().Property(m => m.ContactNumber).HasColumnType("nvarchar(100)").IsRequired(false);
        }
    }
}
