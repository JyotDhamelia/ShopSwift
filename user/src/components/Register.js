import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getBase } from "../helpers/Common";
import { toast } from "../helpers/toastHelper";

export default function Register() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const RegisterUser = (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      toast.error("password and confirm password do not match.");
    } else {
      const data = new FormData();
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("password", password);

      const apiAddress = getBase() + "register.php";
      axios({
        method: "post",
        responseType: "json",
        data: data,
        url: apiAddress,
      })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            console.log(data);

            if (data[0]["error"] !== "no") {
              toast.error(data[0]["error"]);
            }

            toast.success(data[2]["message"]);

            if (data[1]["success"] === "yes") {
              navigate("/login");
            }
          }
        })
        .catch((error) => {
          navigate("/error");
        });
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100" style={{ padding: '0 20px' }}>
        <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="card-body">
            <h2 className="text-center mb-4">Register</h2>
            <form autoComplete="off" onSubmit={RegisterUser}>
              <div className="mb-3">
                <label htmlFor="su-email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="su-email"
                  className="form-control"
                  placeholder="johndoe@example.com"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="form-control"
                  placeholder="1234567890"
                  required
                  onChange={(event) => setMobile(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="********"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="form-control"
                  placeholder="********"
                  required
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
