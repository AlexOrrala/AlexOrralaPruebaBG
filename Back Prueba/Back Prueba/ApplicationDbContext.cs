using System.Collections.Generic;
using System.Reflection.Emit;
using Back_Prueba.Entity;
using Microsoft.EntityFrameworkCore;

namespace Back_Prueba
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Habitaciones> Habitaciones { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Descuento> Descuentos { get; set; }
        public DbSet<Registro> Registros { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Registro>()
            .HasOne(r => r.Habitaciones)
            .WithMany(h => h.Registros)
            .HasForeignKey(r => r.HabitacionesID);

            modelBuilder.Entity<Registro>()
                .HasOne(r => r.Cliente)
                .WithMany(c => c.Registros)
                .HasForeignKey(r => r.ClienteId);

            modelBuilder.Entity<Registro>()
                .HasOne(r => r.Descuento)
                .WithMany(d => d.Registros)
                .HasForeignKey(r => r.DescuentoId);
        }
    }
}
