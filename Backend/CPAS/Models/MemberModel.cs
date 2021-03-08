using System.ComponentModel.DataAnnotations;

namespace CPAS.API.Models
{
    public class MemberModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string ContactNumber { get; set; }
    }
}
