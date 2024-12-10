import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {getBase} from './Common';
export default function Register() {
  //declare state variable 
  var [email, setEmail] = useState('');
  var [mobile, setMobile] = useState('');
  var [password, setPassword] = useState('');
  var [confirmpassword, setConfirmPassword] = useState('');
  var  navigate = useNavigate();
  var RegisterUser =  (event) => {
      event.preventDefault();
      //check whether password and confirm password are same
      if(password !== confirmpassword)
      {

        alert('password and confirm password are not same');
      }
      //password must be atleast 8 characters long & must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character
      
      //alert(email + ' ' + mobile + ' ' + password + ' ' + confirmpassword);
      else 
      {
        var data = new FormData();
        data.append('email', email);
        data.append('mobile', mobile);
        data.append('password', password);
        var apiAddress = getBase() + "register.php";
        axios({
            method: "post",
            responseType: "json",
            data: data,
            url: apiAddress
  
        }).then(function (response) {
            if(response.status === 200)
            {
              let data = response.data;
              console.log(data);
              //[{'error':'oops, something went wrong'}]
              //[{'error':'no'},{'success':'no'},{'message':'email or mobile is already registered'}]
              //[{'error':'no'},{'success':'yes'},{'message':'user registered successfully'}]
              if(data[0]['error']!='no')
              { 
                  alert(data[0]['error']);
              }
              alert(data[2]['message']);
              if(data[1]['success']=='yes')
              {
                  navigate('/login');
              }
            }
        }).catch(function (error) {
          navigate('/error');
      });
      }
   }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                <div className="text-center mb-4">
              <h2>Register</h2>
            </div>
            <form  autoComplete="off" onSubmit={(event) => RegisterUser(event)}>
            
              <div className="mb-3">
                <label htmlFor="su-email">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  id="su-email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="mobile">
                  Mobile
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="mobile"
                  required
                  onChange={(event) => setMobile(event.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="password-toggle">
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label
                    className="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator" />
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="confirmpassword">
                  Confirm password
                </label>
                <div className="password-toggle">
                  <input
                    className="form-control"
                    type="password"
                    id="confirmpassword"
                    required
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <label
                    className="password-toggle-btn"
                    aria-label="Show/hide password"
                  >
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator" />
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-accent btn-shadow d-block w-100">
                Sign up
              </button>
            </form>
  
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
