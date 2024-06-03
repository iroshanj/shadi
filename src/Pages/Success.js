import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const onSave = async function (e) {
    navigate("/login");
  }

  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo"></div>
        <div className=" ">
          <Link to="/login">
            <button className="btn-create">लॉग इन करें</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
      <div className="bap-success">
        <div class="container">
        <div class="row">
            <div class="col-90">
              <p>आपका पंजीकरण सफलतापूर्वक पूरा हो गया है. प्रत्याशियों के बायोडाटा देखने के लिए लॉगिन करे </p>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <button className="btn-save" onClick={onSave}>लॉग इन</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
