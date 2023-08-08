using Microsoft.AspNetCore.Mvc;
using Travellers_Agent.Models;

namespace Travellers_Agent.Interface
{
    public interface ISpot
    {

        public IEnumerable<SpotImages> GetSpot();

        public Task<SpotImages> CreateSpot([FromForm] SpotImages spot, IFormFile imageFile);

        public void Deletespot(int id);


    }
}
