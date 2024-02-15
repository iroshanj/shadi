import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onSave = async function (e) {
    if (username == null || password == null) {
      alert("कृपया अपना पंजीकृत ईमेल और पासवर्ड दर्ज करें");
    } else {
      const dataObj = {
        email: username,
        password: password,
      };

      e.preventDefault();
      const response = await fetch("https://parichay-sammelan-93745ade9b69.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
 
      if (result.status === 200) {
        localStorage.setItem("curUser", JSON.stringify(result.user[0]));
        navigate("/dashboard");
      } else {
        alert("कृपया सही ईमेल और पासवर्ड दर्ज करें");
      }
    }
  };

  const handleData = function (e) {
    if (e.target.name == "username") {
      setUsername(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo">लॉग इन करें</div>
        <div className=" ">
          <Link to="/">
            <button className="btn-create">रद्द करें</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
      <div className="bap">
        <div class="container">
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={username}
                name="username"
                placeholder="ईमेल"
                onChange={handleData}
              ></input>
            </div>
          </div>

          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={password}
                name="password"
                placeholder="पासवर्ड"
                onChange={handleData}
              ></input>
            </div>
          </div>

          <div class="row">
            <div class="col-90">
              <button className="btn-save" onClick={onSave}>
                लॉग इन
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
