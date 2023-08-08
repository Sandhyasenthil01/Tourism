using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Travellers_Agent.Interface;
using Travellers_Agent.Models;
using Travellers_Agent.Service;

namespace Travellers_Agent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpotController : ControllerBase
    {

        private readonly ISpot tr;

        public SpotController(ISpot tr)
        {
            this.tr = tr;
        }

        [HttpGet]
        public ActionResult<IEnumerable<SpotImages>> Get()
        {
            try
            {
                return Ok(tr.GetSpot());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public async Task<ActionResult<SpotImages>> Post([FromForm] SpotImages spot, IFormFile imageFile)
        {

            try
            {
                var createdCourse = await tr.CreateSpot(spot, imageFile);
                return CreatedAtAction("Get", new { id = createdCourse.spot_id }, createdCourse);

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
                tr.Deletespot(id);
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the hotel.");
            }
        }

    }
}
