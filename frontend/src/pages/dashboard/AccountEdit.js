import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { postAccount } from "../../services/";
import BreadCrumb from "../../layouts/breadcrum";

function AccountEdit() {
  const [name, setName] = useState("");
  const { username, setUsername } = useAuth();
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    postAccount({ username: name || username })
      .then((res) => {
        if (!res.username) {
          console.error("There are errors: ", res.message);
        } else {
          setUsername(res.username);
          history.push("/account");
        }
      })
      .catch((e) => console.error(e));
  }
  return (
    <>
      <div className="container">
        <BreadCrumb page="edit" />
        <div className="row">
          <div className="col">
            <h1>Account Editing</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row mb-3 pt-3">
                <label htmlFor="username" className="col-3 col-form-label">
                  User Name
                </label>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountEdit;
