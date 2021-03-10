import React, { useEffect, useState } from "react";

import { API_URL } from "./../../shared/constants";
import { apiProvider } from "./../../services/api";

function Home(props) {
  const [carParkInfo, setCarParkInfo] = useState({
    carpark_info: [
      {
        total_lots: "96",
        lot_type: "C",
        lots_available: "0",
      },
    ],
    carpark_number: "Q81",
    update_datetime: "2021-03-03T12:10:39",
  });
  useEffect(() => {
    getCarParkInfo();
  }, []);

  const getCarParkInfo = () => {
    const url = `${API_URL.carPark}`;
    apiProvider.get(url).then((res) => {
      if (res.items.carpark_data) {
        setCarParkInfo(res.items.carpark_data);
      }
    });
  };
  const renderCarParkInfo = () => {
    return carParkInfo.carpark_info &&
      carParkInfo.carpark_info.map((carPark, index) => {
        return (
          <tr key={index}>
            <td>{index}</td>
            <td>{carPark.total_lots}</td>
            <td>{carPark.lot_type}</td>
            <td>{carPark.lots_available}</td>
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
