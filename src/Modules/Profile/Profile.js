import React, { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 
 import {deleteUser} from "./Service.js";

function Profile() {
  var curUserGen = localStorage.getItem("curUser");
      curUserGen = JSON.parse(curUserGen);
 
   

  const navigate = useNavigate();
  const [allCards, setCards] = useState([]);
  const [cardToShow, setCardToShow] = useState(0);
  const [paystatus, setPayStatus] = useState(curUserGen.paystatus);

  const onUpdate = function(){
    navigate("/update");
  }
  const onDelete = async function(){
    if(window.confirm('क्या आप निश्चित रूप से अपनी प्रोफ़ाइल हटाना चाहते हैं?')){
      const dataObj = {
        id: curUserGen.id
      };
       
      const result = await deleteUser(dataObj);
  
      if (result.status == true) {
        alert('आपका बायोडाटा हमेशा के लिए हटा दिया गया है')
        localStorage.clear();
        navigate("/");
      } else {
        
      }
    }else{
    }}

   
  const onLogout = function () {
    localStorage.clear();
    navigate("/");
  };
  const goToProfiles = function () {
     navigate("/dashboard");
  };

  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo"> </div>
        <div className=" ">
        <button className="btn-create" onClick={goToProfiles}>
        प्रत्याशी परिचय पत्रिका पर जाए 
          </button>
        </div>
        <div className=" ">
          <button className="btn-create" onClick={onLogout}>
            लॉग आउट
          </button>
        </div>
         
      </div>
      <div className="space"></div>
      <div className="dash">
         

         

          <div className="bio">
            <div className="space"></div>
            <div className="space"></div>
            <div className="btn-container">
             
            </div>
            <div className="space"></div>
            <div className="card-container">
              <div className="pic-holder">
                <img className="p-icon" src={curUserGen.url}></img>
              </div>
              <div className="space"></div>
               
              <div className="name-holder">
                <div className="bio-row">
                  <div className="heading"> नाम </div>
                  <div className="data">{curUserGen.name}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म तिथि</div>
                  <div className="data">{curUserGen.dob}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म का समय</div>
                  <div className="data">{curUserGen.tob}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म स्थान</div>
                  <div className="data">{curUserGen.pob}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">ऊंचाई</div>
                  <div className="data">{curUserGen.height}</div>
                </div>
                
                 
                <div className="bio-row">
                  <div className="heading">पेशा</div>
                  <div className="data">{curUserGen.profession}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">शिक्षा</div>
                  <div className="data">{curUserGen.education}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">नौकरी पता </div>
                  <div className="data">
                    {curUserGen.oficelocation}
                  </div>
                </div>
                <div className="bio-row">
                  <div className="heading">मासिक आय</div>
                  <div className="data">{curUserGen.income}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">मोबाइल नंबर </div>
                  <div className="data">{curUserGen.mobile}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">पिता</div>
                  <div className="data">{curUserGen.father}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">माता</div>
                  <div className="data">{curUserGen.mother}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">भाई-बहन</div>
                  <div className="data">{curUserGen.sib}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">माता/पिता मोबाइल </div>
                  <div className="data">{curUserGen.contact}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जाति विवरण</div>
                  <div className="data">{curUserGen.cast}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">स्वयं गोत्र</div>
                  <div className="data">{curUserGen.sgotra}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">मामा गोत्र</div>
                  <div className="data">{curUserGen.mgotra}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">अपेक्षित</div>
                  <div className="data">{curUserGen.expected}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">स्थायी पता</div>
                  <div className="data">{curUserGen.address}</div>
                </div>
                <div className="bio-row">
                  <button className="btn-save" onClick={onUpdate}>अपनी जानकारी में सुधार करे </button>
                </div>
                <div className="bio-row">
                  <button className="btn-danger" onClick={onDelete}>अपनी प्रोफाइल हमेशा के लिए हटा दे </button>
                </div>
                
              </div>
            </div>
          </div>
    
      </div>
    </>
  );
}

export default Profile;
