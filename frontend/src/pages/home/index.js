import React, { useEffect, useState } from "react";

import { API_URL } from "./../../shared/constants";
import { apiProvider } from "./../../services/api";

function Home(props) {
  const [carParkInfo, setCarParkInfo] = useState([
    {
      "carparkInfo": [
        {
          "totalLots": "91",
          "lotType": "C",
          "lotsAvailable": "0"
        }
      ],
      "carparkNumber": "HE12",
      "updateDatetime": "2021-03-03T12:10:46"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "583",
          "lotType": "C",
          "lotsAvailable": "53"
        }
      ],
      "carparkNumber": "HLM",
      "updateDatetime": "2021-03-03T12:10:56"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "322",
          "lotType": "C",
          "lotsAvailable": "135"
        }
      ],
      "carparkNumber": "RHM",
      "updateDatetime": "2021-03-03T12:10:46"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "97",
          "lotType": "C",
          "lotsAvailable": "0"
        }
      ],
      "carparkNumber": "BM29",
      "updateDatetime": "2021-03-03T12:10:51"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "96",
          "lotType": "C",
          "lotsAvailable": "0"
        }
      ],
      "carparkNumber": "Q81",
      "updateDatetime": "2021-03-03T12:10:39"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "176",
          "lotType": "C",
          "lotsAvailable": "0"
        }
      ],
      "carparkNumber": "C20",
      "updateDatetime": "2021-03-03T12:10:43"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "228",
          "lotType": "C",
          "lotsAvailable": "35"
        }
      ],
      "carparkNumber": "FR3M",
      "updateDatetime": "2021-03-03T12:10:46"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "289",
          "lotType": "C",
          "lotsAvailable": "177"
        }
      ],
      "carparkNumber": "C32",
      "updateDatetime": "2021-03-03T12:10:45"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "332",
          "lotType": "C",
          "lotsAvailable": "113"
        }
      ],
      "carparkNumber": "C6",
      "updateDatetime": "2021-03-03T12:10:34"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "273",
          "lotType": "C",
          "lotsAvailable": "106"
        }
      ],
      "carparkNumber": "TG2",
      "updateDatetime": "2021-03-03T12:10:37"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "543",
          "lotType": "C",
          "lotsAvailable": "303"
        }
      ],
      "carparkNumber": "BP1",
      "updateDatetime": "2021-03-03T12:10:31"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "133",
          "lotType": "C",
          "lotsAvailable": "83"
        }
      ],
      "carparkNumber": "TG1",
      "updateDatetime": "2021-03-03T12:10:51"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "189",
          "lotType": "C",
          "lotsAvailable": "121"
        }
      ],
      "carparkNumber": "TGM2",
      "updateDatetime": "2021-03-03T12:10:37"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "138",
          "lotType": "C",
          "lotsAvailable": "63"
        }
      ],
      "carparkNumber": "TE14",
      "updateDatetime": "2021-03-03T12:10:40"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "48",
          "lotType": "C",
          "lotsAvailable": "13"
        }
      ],
      "carparkNumber": "BM3",
      "updateDatetime": "2021-03-03T12:10:53"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "612",
          "lotType": "C",
          "lotsAvailable": "121"
        }
      ],
      "carparkNumber": "BM9",
      "updateDatetime": "2018-12-17T07:42:34"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "143",
          "lotType": "C",
          "lotsAvailable": "0"
        }
      ],
      "carparkNumber": "HG44",
      "updateDatetime": "2021-03-03T12:07:27"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "81",
          "lotType": "C",
          "lotsAvailable": "10"
        }
      ],
      "carparkNumber": "HG64",
      "updateDatetime": "2021-03-03T12:07:41"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "308",
          "lotType": "C",
          "lotsAvailable": "208"
        }
      ],
      "carparkNumber": "PM27",
      "updateDatetime": "2021-03-03T12:07:27"
    },
    {
      "carparkInfo": [
        {
          "totalLots": "302",
          "lotType": "C",
          "lotsAvailable": "193"
        }
      ],
      "carparkNumber": "PM28",
      "updateDatetime": "2021-03-03T12:07:51"
    }
  ]);
  useEffect(() => {
    getCarParkInfo();
  }, []);

  const getCarParkInfo = () => {
    const url = `${API_URL.carPark}?datetime=2021-03-03T12:12:12`;
    apiProvider.get(url).then((res) => {
      if (res.items.carpark_data) {
        setCarParkInfo(res.items.carpark_data);
      }
    });
  };
  const renderCarParkInfo = () => {
    return carParkInfo &&
      carParkInfo.map((carPark, index) => {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{carPark.carparkInfo[0].totalLots}</td>
            <td>{carPark.carparkInfo[0].lotType}</td>
            <td>{carPark.carparkInfo[0].lotsAvailable}</td>
          </tr>
        );
      });
  };
  return (
    carParkInfo && (
      <React.Fragment>
        <h2>Car Park</h2>
        <table className="table table-bordered table-sm" width="100%">
          <thead className="active">
            <tr>
              <th className="th-sm">No</th>
              <th className="th-sm">Total Lots</th>
              <th className="th-sm">Lot Type</th>
              <th className="th-sm">Lots Available</th>
            </tr>
          </thead>
          <tbody>{renderCarParkInfo()}</tbody>
        </table>
      </React.Fragment>
    )
  );
}

export default Home;
