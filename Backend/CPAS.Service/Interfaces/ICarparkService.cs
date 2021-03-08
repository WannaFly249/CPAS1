using System.Threading.Tasks;

namespace CPAS.Service.Interfaces
{
    public interface ICarparkService
    {
        Task<string> CheckCarparkAvailability(string datetime);
    }
}
