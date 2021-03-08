using CPAS.API.Attributes;
using CPAS.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CPAS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarparkController : ControllerBase
    {
        #region Contructor
        private readonly ICarparkService _carparkService;

        public CarparkController(ICarparkService carparkService)
        {
            _carparkService = carparkService;
        }
        #endregion

        #region APIs

        [Authorize]
        [HttpGet]
        public IActionResult GetCarparkAvailability(string datetime)
        {
            if (string.IsNullOrEmpty(datetime))
                return BadRequest();
            var resutl = _carparkService.CheckCarparkAvailability(datetime);

            return Ok(resutl);
        }

        #endregion
    }
}
