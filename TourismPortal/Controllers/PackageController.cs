using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Travellers_Agent.Interface;
using Travellers_Agent.Models;

namespace Travellers_Agent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackages er;

        public PackageController(IPackages er)
        {
            this.er = er;
        }



        [HttpGet]
        public ActionResult<IEnumerable<TourPackages>> Getpackages()
        {
            try
            {
                return Ok(er.Getpackages());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving hotels.");
            }
        }


        [HttpGet("{id}")]
        public ActionResult<TourPackages> Getid(int id)
        {
            try
            {
                var travel = er.GetTourPackagesbyId(id);
                if (travel == null)
                {
                    return NotFound();
                }
                return Ok(travel);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the hotel.");
            }
        }


        [HttpPost]
        public async Task<ActionResult<TourPackages>> Post([FromForm] TourPackages tourPackages, IFormFile imageFile)
        {

            try
            {
                var createdCourse = await er.Postpackages(tourPackages, imageFile);
                return CreatedAtAction("Get", new { id = createdCourse.package_id }, createdCourse);

            }
            catch (ArgumentException ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                er.Delete(id);
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the hotel.");
            }
        }

        [HttpGet("TourId/{id}")]
        public async Task<ActionResult<ICollection<TourPackages>>> GetTourPackageByTourId(int id)
        {
            try
            {
                var tourPackage = await er.GetTourPackageByTourId(id);

                if (tourPackage == null)
                {
                    return NotFound();
                }
                return Ok(tourPackage);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
