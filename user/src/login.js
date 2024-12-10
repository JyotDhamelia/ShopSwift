import axios from "axios";  
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {getBase} from "./Common";
export default function Login() {
  //declare state variable
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cookies, setCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  let VerifyLogin = (event) => {
      event.preventDefault();
      var data = new FormData();
      data.append('email', email);
      data.append('password', password);
      var apiAddress = getBase() + "login.php";
      axios({
          method: "post",
          responseType: "json",
          data: data,
          url: apiAddress
      }).then(function (response) {
          // console.log(response);
          if (response.status ===  200 ) {
              let data = response.data;
              console.log(data);
              if(data[0]['error']!=='no')
              {
                  alert(data[0]['error']);
              }
              alert(data[2]['message']);
              if(data[1]['success']=='yes')
              {
                setCookie("userid", data[3]['id']);
                navigate('/');
              }
          }
      }).catch(function (error) {
          navigate('/error');
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <h2>Login</h2>
              </div>
              <form  onSubmit={(event) => VerifyLogin(event)}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="si-email">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="si-email"
                    placeholder="johndoe@example.com"
                    required onChange={(event) => setEmail(event.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="si-password">
                    Password
                  </label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="si-password"
                      required
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <label
                      className="password-toggle-btn"
                      aria-label="Show/hide password"
                    >
                      <input
                        className="password-toggle-check"
                        type="checkbox"
                      />
                      <span className="password-toggle-indicator" />
                    </label>
                  </div>
                </div>
                <div className="mb-3 d-flex flex-wrap justify-content-between">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="si-remember"
                    />
                    <label className="form-check-label" htmlFor="si-remember">
                      Remember me
                    </label>
                  </div>
                  <a className="fs-sm" href="/forgot-password">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="btn btn-accent btn-shadow d-block w-100"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>

            <div className="text-center">
              <p>
              Don't have an account? <a href="/register">Register Here</a>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
