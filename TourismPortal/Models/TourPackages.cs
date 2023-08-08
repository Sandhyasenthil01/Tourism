using System.ComponentModel.DataAnnotations;

namespace Travellers_Agent.Models
{
    public class TourPackages
    {
        [Key]

        public int? package_id { get; set; }
        public int? user_id { get; set; }

        public int? TourId { get; set; }

        public string? food { get; set; }


        public string? hotel_nearby { get; set; }

        public string? spots_nearby { get; set; }


        public string? speciality_of_the_place { get; set; }


        public string? itenary { get; set; }

        public string? image { get; set; }

        public int? price { get; set; }

        public string? vacation_type { get; set; }

        public string? duration { get; set; }

        public ICollection<SpotImages>? spot { get; set; }



    }
}
