namespace Back_Prueba.Entity
{
    public class Habitaciones
    {
        public int Id { get; set; }
        public string ubicacion { get; set; }
        public string Estado { get; set; }


        public ICollection<Registro> Registros { get; set; }

    }
}
