using System.Collections.Generic;
using System.Threading.Tasks;
using CPAS.Service.Models;

namespace CPAS.Service.Interfaces
{
    public interface ICarparkService
    {
        Task<List<CarparkIf>> CheckCarparkAvailability(string datetime);
    }
}
