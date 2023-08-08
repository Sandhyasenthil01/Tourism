using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Travellers_Agent.Interface;
using Travellers_Agent.Models;

namespace Travellers_Agent.Service
{
    public class SpotRepo : ISpot
    {
        private readonly AgentsContext travelContext;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public SpotRepo(AgentsContext con, IWebHostEnvironment webHostEnvironment)
        {
            travelContext = con;
            _webHostEnvironment = webHostEnvironment;
        }
        public IEnumerable<SpotImages> GetSpot()
        {
            return travelContext.spot.Include(t => t.TourPackages).ToList();
        }

        public async Task<SpotImages> CreateSpot([FromForm] SpotImages spot, IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                throw new ArgumentException("Invalid file");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Uploads");
            var fileName = $"{Guid.NewGuid()}{Path.GetExtension(imageFile.FileName)}";
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            spot.image1 = fileName;
            travelContext.spot.Add(spot);
            await travelContext.SaveChangesAsync();

            return spot;
        }

        public void Deletespot(int id)
        {
            SpotImages e = travelContext.spot.FirstOrDefault(x => x.Id == id);
            travelContext.spot.Remove(e);
            travelContext.SaveChanges();
        }
    }
}
