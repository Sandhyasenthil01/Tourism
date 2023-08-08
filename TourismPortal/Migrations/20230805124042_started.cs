using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Travellers_Agent.Migrations
{
    /// <inheritdoc />
    public partial class started : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tours",
                columns: table => new
                {
                    package_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "6001, 1"),
                    user_id = table.Column<int>(type: "int", nullable: true),
                    TourId = table.Column<int>(type: "int", nullable: true),
                    food = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    hotel_nearby = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    spots_nearby = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    speciality_of_the_place = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    itenary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    price = table.Column<int>(type: "int", nullable: true),
                    vacation_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    duration = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tours", x => x.package_id);
                });

            migrationBuilder.CreateTable(
                name: "spot",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "7501, 1"),
                    spot_id = table.Column<int>(type: "int", nullable: false),
                    image1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    package_id = table.Column<int>(type: "int", nullable: false),
                    TourPackagespackage_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_spot", x => x.Id);
                    table.ForeignKey(
                        name: "FK_spot_Tours_TourPackagespackage_id",
                        column: x => x.TourPackagespackage_id,
                        principalTable: "Tours",
                        principalColumn: "package_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_spot_TourPackagespackage_id",
                table: "spot",
                column: "TourPackagespackage_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "spot");

            migrationBuilder.DropTable(
                name: "Tours");
        }
    }
}
