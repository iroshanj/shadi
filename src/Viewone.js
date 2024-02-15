import React from "react";
import { Outlet, Link } from "react-router-dom";

function Viewone() {
  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo">जैन वधु-वर विवाह परिचय पत्रिका </div>
        <div className=" ">
          <Link to="/register">
            <button className="btn-create">आवेदन भरें</button>
          </Link>
          <Link to="/login">
            <button className="btn-login">लॉग इन करें</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
      <div className="bap">
        <div className="space"></div>

        <div className="view-three">
          जय जिनेन्द्र
          <p>
          सबसे पहले आपका इस जैन परिचय सम्मेलन वेबसाइट पर बहुत-बहुत स्वागत है। यह वेबसाइट जैन समाज विवाह परिचय सम्मेलन का एक डिजिटल रूप है।
          </p>
          <p>
          इस वेबसाइट पर आपको सिर्फ 701 रुपये का भुगतान करना होगा और अपनी जानकारी के साथ रजिस्ट्रेशन करना होगा। उसके बाद आप यहां असीमित बायोडाटा देख सकते हैं जब तक कि आप अपना प्रोफ़ाइल हटा न दें।
          </p>
          <p>
          यह सेवा केवल हमारे जैन समाज के लिए है। हमारे समाज में ऐसे कई योग्य लड़के और लड़कियाँ हैं जिन्हें आदर्श जीवन साथी की आवश्यकता होती है। लेकिन नेटवर्क की कमी के कारण हमारे लड़के-लड़कियों को अपना जीवनसाथी ढूंढने में दिक्कतों का सामना करना पड़ रहा है। हमें उम्मीद है कि इस वेबसाइट पर आपकी समस्या का समाधान हो जाएगा। तो कृपया आगे बढ़ें और यहां पंजीकरण करें। आपके भविष्य के लिए शुभकामनाएँ।
          </p>
        </div>
        <br></br>
        <div className="large-space"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Viewone;
