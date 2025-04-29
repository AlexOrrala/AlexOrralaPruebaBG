using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_Prueba.Migrations
{
    /// <inheritdoc />
    public partial class addEstadoRegistro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "Registros",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Estado",
                table: "Registros");
        }
    }
}
