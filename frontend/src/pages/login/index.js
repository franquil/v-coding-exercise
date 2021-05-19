import React, { useState } from "react";
import { postLogin } from "../../services/index";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/auth";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { isAuthenticated, setIsAuthenticated, setUsername } = useAuth();
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();
    if (isAuthenticated) {
      setMessage("User is already authenticated.");
    } else {
      postLogin({ username: name, userpassword: password })
        .then((res) => {
          if (res.username) {
            setIsAuthenticated(true);
            setUsername(res.username);
            history.push("/account");
          } else {
            setMessage("Failed to login.");
          }
        })
        .catch((e) => setMessage(e.message));
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-start">
          <div className="col-6 pb-5 mb-5">
            {message && (
              <div className="alert alert-info" role="alert">
                {message}
              </div>
            )}
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="row mb-3 pt-5">
                <label htmlFor="username" className="col-3 col-form-label">
                  User Name:
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="userpassword" className="col-3 col-form-label">
                  Password:
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="userpassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
