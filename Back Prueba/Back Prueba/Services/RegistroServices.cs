using Back_Prueba.Entity;
using Microsoft.EntityFrameworkCore;

namespace Back_Prueba.Services
{
    public class RegistroServices
    {
        private readonly ApplicationDbContext _context;

        public RegistroServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Registro> AddRegistro(Registro registro)
        {
            try
            {
                await _context.Registros.AddAsync(registro);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return registro;
        }

        public async Task<List<Habitaciones>> AllHabitacionEstadoA()
        {
            return await _context.Habitaciones.Where(h=> h.Estado == "Activa").ToListAsync();
            
        }


    }
}
