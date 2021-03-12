using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CPAS.Service.Interfaces;
using CPAS.Service.Models;
using Newtonsoft.Json;

namespace CPAS.Service.Services
{
    public class CarparkService : ICarparkService
    {
        #region Contructor

        public CarparkService()
        {

        }

        #endregion

        #region Public Method
        public async Task<List<CarparkIf>> CheckCarparkAvailability(string datetime)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create($"https://api.data.gov.sg/v1/transport/carpark-availability?date_time={datetime}");
            webRequest.Method = "GET";
            webRequest.ContentType = "application/json";
            HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse();
            using var streamReader = new StreamReader(webResponse.GetResponseStream());
            var jsonResult = await streamReader.ReadToEndAsync();
            var result = JsonConvert.DeserializeObject<Carpark>(jsonResult);
            if (result == null) return null;
            return result.Items.FirstOrDefault()?.CarparkData.Take(20).ToList();
        }
        #endregion
    }
}
