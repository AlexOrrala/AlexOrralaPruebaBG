namespace Back_Prueba.Entity
{
    public class Descuento
    {
        public int Id { get; set; }
        public DateTime fechaInicio { get; set; }
        public DateTime fechaFin { get; set; }
        public Boolean porcentual {  get; set; }
        public float descuento { get; set; }


        public ICollection<Registro> Registros { get; set; }

    }
}
