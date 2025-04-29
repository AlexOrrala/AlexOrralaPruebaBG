namespace Back_Prueba.Entity
{
    public class Registro
    {
        public int Id { get; set; }
        public int HabitacionesID { get; set; }
        public Habitaciones Habitaciones { get; set; }
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }
        public int DescuentoId { get; set; }
        public Descuento Descuento { get; set; }

        public string TipoEstancia { get; set; }
        public string Estado { get; set; }
        public float totalCalculado { get; set; }


        public DateTime FechaRegistro { get; set; }
        public DateTime FechaFinal { get; set; }
        public DateTime Modificado { get; set; }
    }
}
