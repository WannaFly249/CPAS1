using CPAS.API.Attributes;
using CPAS.API.Models;
using CPAS.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CPAS.Service.Models;
using Microsoft.AspNetCore.Cors;

namespace CPAS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        #region Contructor
        private readonly IMemberService _memberService;

        public MemberController(IMemberService memberService)
        {
            _memberService = memberService;
        }
        #endregion

        #region APIs

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetMemberDetails(int memberId)
        {
            if (memberId == 0)
                return BadRequest();
            var memberDetail = await _memberService.GetMemberDetail(memberId);

            return Ok(memberDetail);
        }

        [HttpPost("login")]
        public IActionResult Authenticate(AuthenticateRequestModel model)
        {
            var response = _memberService.Authenticate(model.Email, model.Password);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignupMember(MemberModel model)
        {
            var memberDto = new MemberDto
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password,
                ContactNumber = model.ContactNumber
            };
            var result = await  _memberService.SignupMember(memberDto);
            if (result < 0) return BadRequest();
            return Ok();
        }

        #endregion
    }
}
