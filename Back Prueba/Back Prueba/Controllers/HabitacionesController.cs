using Back_Prueba.Entity;
using Back_Prueba.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Back_Prueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitacionesController : ControllerBase
    {

        private readonly RegistroServices registro;

        public HabitacionesController(RegistroServices _registro)
        {
            this.registro = _registro;

        }

        [HttpGet("ObtenerActivas/")]
        public ActionResult<List<Habitaciones>> Get()
        {
            return registro.AllHabitacionEstadoA().Result;
        }

        // POST api/<Habitaciones>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Habitaciones>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Habitaciones>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
