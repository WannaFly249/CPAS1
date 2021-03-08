using CPAS.Service.Models;
using System.Threading.Tasks;

namespace CPAS.Service.Interfaces
{
    public interface IMemberService
    {
        Task<MemberDto> GetMemberDetail(int memberId);
        Task<AuthenticateResponse> Authenticate(string email, string password);
        Task<int> SignupMember(MemberDto member);
    }
}
