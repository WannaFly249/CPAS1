using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CPAS.Service.Interfaces
{
    public interface ICarparkService
    {
        string CheckCarparkAvailability(string datetime);
    }
}
