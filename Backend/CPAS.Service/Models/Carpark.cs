using System.Collections.Generic;
using Newtonsoft.Json;

namespace CPAS.Service.Models
{
    public class Carpark
    {
        public List<CarparkDt> Items { get; set; }
    }

    public class CarparkIf
    {
        [JsonProperty("carpark_info")]
        public List<CarparkDetail> CarparkInfo { get; set; }
        [JsonProperty("carpark_number")]
        public string CarparkNumber { get; set; }
        [JsonProperty("update_datetime")]
        public string UpdateDatetime { get; set; }
    }

    public class CarparkDetail
    {
        [JsonProperty("total_lots")]
        public string TotalLots { get; set; }
        [JsonProperty("lot_type")]
        public string LotType { get; set; }
        [JsonProperty("lots_available")]
        public string LotsAvailable { get; set; }
    }

    public class CarparkDt
    {
        [JsonProperty("carpark_data")]
        public List<CarparkIf> CarparkData { get; set; }
        public string TimeStamp { get; set; }
    }
}
