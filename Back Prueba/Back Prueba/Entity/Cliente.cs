namespace Back_Prueba.Entity
{
    public class Cliente
    {
        public int Id { get; set; }
        public string usuario { get; set; }
        public string Estado { get; set; }


        public ICollection<Registro> Registros { get; set; }

    }
}
