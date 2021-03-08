using System.Text.Json.Serialization;

namespace CPAS.Service.Models
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string ContactNumber { get; set; }
    }
}
