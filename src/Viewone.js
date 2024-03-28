import React from "react";
 
import { useState,useEffect } from "react";
 
import { Outlet, Link } from "react-router-dom";
import rooturl from "./config.js";
 

function Viewone() {
  const [loader, setLoader] = useState(true);
  const dataObj = {
    email: 'zxdg@gmail.com',
    password: '1258(*KJB4EDFF',
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${rooturl}/login`,{
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      var jsonData = await response.json();
      if (jsonData.status === 200) {
        setLoader(false)
      } else {
        setLoader(false)
      }
       
   
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="mah">|| श्री महावीराय नमः ||</div>
      <div className="space"></div>

      <div className="app-header">
        
        <div className="logo">सकल जैन समाज युवक-युवती परिचय पत्रिका </div>
        <div> <Link to="/register">
            <button className="btn-create">आवेदन भरें</button>
          </Link></div>
          <div> <Link to="/login">
            <button className="btn-create">लॉग इन करें</button>
          </Link></div>
       
      </div>
      <div className="space"></div>
      <div className="bap">
        <div className="space"></div>

        {loader==true?(<div className="view-three">
          <p>
          <h1 className="logo">Application is Loading......!</h1>
          </p>
          <div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
           </div>):null}

        {loader==false?(<div className="view-three">
          <p className="namaste">आत्मीय स्नेही स्वजन, सादर जय जिनेंद्र एवं शुद्धात्म वंदन!</p>
          <p>
            सर्व प्रथम हम आपका इस जैन परिचय वेबसाइट पर हार्दिक स्वागत
            करते है| </p>
          <p>यह वेबसाइट जैन समाज विवाह परिचय सम्मेलन का एक डिजिटल स्वरुप
            है। वर्तमान समय में जैन समाज के सुयोग्य युवक और युवतियों को अपना
            जीवन साथी चयन करेने में कई समस्याएं आ रही है और इसकी प्रमुख वजह है
            परिचय की कमी| समाज की इसी समस्या का कुछ हद तक समाधान करने के लिए
            हमने इस वेबसाइट का निर्माण किया है|
          </p>
          <p>
            हम आपके स्वस्थ एवं मंगलमय जीवन की कामना करते हैं एवं आपके
            पुत्र/पुत्री के विवाह हेतु उत्तम चयन में सहायक होना चाहते हैं।
          </p>
          <p>कृपया अपना आवेदन ऊपर दिए बटन पे जमा करे | धन्यवाद्</p>
        </div>):null}
        <br></br>
        <div className="large-space"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Viewone;
