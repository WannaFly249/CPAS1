import React, { useEffect, useState } from "react";

import { API_URL } from "./../../shared/constants";
import { apiProvider } from "./../../services/api";

function Home(props) {
  const [carParkInfo, setCarParkInfo] = useState([]);
  useEffect(() => {
    getCarParkInfo();
  }, []);

  const getCarParkInfo = () => {
    const url = `${API_URL.carPark}?datetime=2021-03-03T12:12:12`;
    apiProvider.get(url).then((res) => {
      if (res.data) {
        setCarParkInfo(res.data);
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
