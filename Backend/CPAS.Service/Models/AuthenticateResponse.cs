namespace CPAS.Service.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(MemberDto member, string token)
        {
            Id = member.Id;
            FirstName = member.FirstName;
            LastName = member.LastName;
            Email = member.Email;
            Token = token;
        }
    }
}
