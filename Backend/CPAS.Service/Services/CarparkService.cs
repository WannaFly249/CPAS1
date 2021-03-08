using System.IO;
using System.Net;
using System.Threading.Tasks;
using CPAS.Service.Interfaces;

namespace CPAS.Service.Services
{
    public class CarparkService : ICarparkService
    {
        #region Contructor

        public CarparkService()
        {

        }

        #endregion

        #region Public Metho
        public async Task<string> CheckCarparkAvailability(string datetime)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create($"https://api.data.gov.sg/v1/transport/carpark-availability?date_time={datetime}");
            webRequest.Method = "GET";
            webRequest.ContentType = "application/json";
            HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse();
            using var streamReader = new StreamReader(webResponse.GetResponseStream());
            var result = await streamReader.ReadToEndAsync();
            return result;
        }
        #endregion
    }
}
