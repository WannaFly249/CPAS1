import React, { useEffect, useState } from "react";

import { API_URL } from "./../../shared/constants";
import { apiProvider } from "./../../services/api";

function Member() {
  const [userInfo, setUserInfo] = useState({
    firstName: "Tran",
    lastName: "Tien",
    emailName: "tientm@smartosc.com",
    contractNumber: "0915511994",
  });
  const user = localStorage.getItem("user");
  const memberId = user ? user.id : "1";
  useEffect(() => {
    if (memberId) {
      getMemberInfo();
    }
  }, []);

  const getMemberInfo = () => {
    const url = `${API_URL.member}/${memberId}`;
    apiProvider.get(url).then((res) => {
      setUserInfo(res);
    });
  };

  return (
    userInfo && (
      <React.Fragment>
        <h2>Member Info</h2>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="row form-group">
                  <div class="col-3">
                    <label>First Name</label>
                  </div>
                  <div class="col-6">{userInfo.firstName}</div>
                </div>
                <div class="row form-group">
                  <div class="col-3">
                    <label>Last Name</label>
                  </div>
                  <div class="col-6">{userInfo.lastName}</div>
                </div>
                <div class="row form-group">
                  <div class="col-3">
                    <label>Email</label>
                  </div>
                  <div class="col-6">{userInfo.email}</div>
                </div>
                <div class="row form-group">
                  <div class="col-3">
                    <label>Contract Number</label>
                  </div>
                  <div class="col-6">{userInfo.contactNumber}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  );
}

export default Member;
