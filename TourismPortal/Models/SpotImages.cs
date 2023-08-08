using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Travellers_Agent.Models
{
    public class SpotImages
    {
        [Key]
        public int Id { get; set; }
        public int spot_id { get; set; }
        public string? image1 { get; set; }

        [ForeignKey("Tourpackages")]
        public int package_id { get; set; }

        public TourPackages? TourPackages { get; set; }
    }
}
