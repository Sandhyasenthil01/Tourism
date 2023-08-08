using Microsoft.AspNetCore.Mvc;
using Travellers_Agent.Models;

namespace Travellers_Agent.Interface
{
    public interface IPackages
    {
        public IEnumerable<TourPackages> Getpackages();

        public TourPackages GetTourPackagesbyId(int id);

        public Task<TourPackages> Postpackages([FromForm] TourPackages tourPackages, IFormFile imageFile);

        public void Delete(int id);

        public Task<ICollection<TourPackages>> GetTourPackageByTourId(int tourId);
    }
}
