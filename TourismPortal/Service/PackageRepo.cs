using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Travellers_Agent.Interface;
using Travellers_Agent.Models;

namespace Travellers_Agent.Service
{
    public class PackageRepo : IPackages
    {
        private readonly AgentsContext AgentsContext;
        private readonly IWebHostEnvironment _webHostEnvironment;


    
        public PackageRepo(AgentsContext con, IWebHostEnvironment webHostEnvironment)
        {
            AgentsContext = con;
            _webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TourPackages> Getpackages()
        {
            return AgentsContext.Tours.Include(t => t.spot).ToList();
        }

        public TourPackages GetTourPackagesbyId(int id)
        {
            return AgentsContext.Tours.FirstOrDefault(a => a.package_id == id);
        }


        public async Task<TourPackages> Postpackages([FromForm] TourPackages tour, IFormFile imageFile)
        {
            {
                if (imageFile == null || imageFile.Length == 0)
                {
                    throw new ArgumentException("Invalid file");
                }

                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }

                tour.image = fileName;
                AgentsContext.Tours.Add(tour);
                await AgentsContext.SaveChangesAsync();

                return tour;
            }
        }

        public void Delete(int id)
        {
            TourPackages e = AgentsContext.Tours.FirstOrDefault(x => x.package_id == id);
            AgentsContext.Tours.Remove(e);
            AgentsContext.SaveChanges();
        }

        public async Task<ICollection<TourPackages>> GetTourPackageByTourId(int tourId)
        {
            return await AgentsContext.Tours
                                         .Include(t => t.spot)
                                         .Where(t => t.TourId == tourId).ToListAsync();
        }

    }
}
