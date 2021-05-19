import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import BreadCrumb from "../../layouts/breadcrum";
import { getAccount } from "../../services/";

function AccountInfo() {
  const { username } = useAuth();
  const [info, setInfo] = useState("");

  useEffect(() => {
    getAccount({ username })
      .then((res) => {
        if (res) {
          setInfo(res.data);
        }
      })
      .catch((e) => console.log("Failed to get information e", e));
  });

  return (
    <>
      <div className="container">
        <BreadCrumb page="info" />
        <div className="row">
          <div className="col">
            <h1>Account Information</h1>
            <div className="row mb-3 pt-3">
              <div className="col">Account Name: {username}</div>
            </div>
            <div className="row mb-3 pt-3">
              <div className="col">
                Here should show some information: {info}(May be empty)
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Link className="btn btn-primary" to="/account/edit">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
