import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { getBase } from "../helpers/Common";
import { toast } from "../helpers/toastHelper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const LoginUser = (event) => {
    event.preventDefault(); 

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    const apiAddress = getBase() + "login.php";
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
          } else if (data[1]["success"] === "yes") {
            setCookie("userid", data[3]['id']);
            toast.success("login successful!");
            navigate("/");
          }
        }
      })
      .catch(() => {
        toast.error("an error occurred. please try again later.");
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ padding: '0 20px' }}>
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form autoComplete="off" onSubmit={LoginUser}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="johndoe@example.com"
                required
                onChange={(event) => setEmail(event.target.value)}
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
              <div className="text-end mt-2">
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
