using CPAS.Common.Options;
using CPAS.Data.Repositories;
using CPAS.Service.Interfaces;
using CPAS.Service.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CPAS.Data.Models;

namespace CPAS.Service.Services
{
    public class MemberService : IMemberService
    {
        #region Contructoe
        private readonly IMemberRepository _memberRepository;
        private readonly AppSettings _appSettings;

        public MemberService(IMemberRepository memberRepository, IOptions<AppSettings> appSettings)
        {
            _memberRepository = memberRepository;
            _appSettings = appSettings.Value;
        }
        
        #endregion

        #region Public method

        /// <summary>
        /// Get member detail information by Id
        /// </summary>
        /// <param name="memberId"></param>
        /// <returns></returns>
        public async Task<MemberDto> GetMemberDetail(int memberId)
        {
            var member = await _memberRepository.GetAsync(x => x.Id == memberId);
            if (member == null) return null;
            MemberDto memberDto = new MemberDto
            {
                Id = member.Id,
                FirstName = member.FirstName,
                LastName = member.LastName,
                Email = member.Email,
                ContactNumber = member.ContactNumber
            };
            return memberDto;
        }

        public async Task<AuthenticateResponse> Authenticate(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return null;
            var member = await _memberRepository.GetAsync(x => x.Email == email && x.Password == password);
            if (member == null)
                return null;

            MemberDto memberDto = new MemberDto
            {
                Id = member.Id,
                FirstName = member.FirstName,
                LastName = member.LastName,
                Email = member.Email,
                ContactNumber = member.ContactNumber
            };

            // authentication successful so generate jwt token
            var token = generateJwtToken(memberDto);

            return new AuthenticateResponse(memberDto, token);
        }

        public async Task<int> SignupMember(MemberDto memberDto)
        {
            Member member  = new Member
            {
                FirstName = memberDto.FirstName,
                LastName = memberDto.LastName,
                Email = memberDto.Email,
                Password = memberDto.Password,
                ContactNumber = memberDto.ContactNumber
            };

            _memberRepository.Add(member);
            var result = await _memberRepository.SaveChangeAsync();

            return result;
        }

        #endregion

        #region Private Method

        private string generateJwtToken(MemberDto member)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", member.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        #endregion
    }
}
