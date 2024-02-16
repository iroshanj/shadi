import React from "react";
import { Outlet, Link } from "react-router-dom";

function Viewone() {
  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo">जैन युवक-युवती परिचय पत्रिका </div>
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

        <div className="view-three">
          <p className="namaste">आत्मीय स्नेही स्वजन, सादर जय जिनेंद्र एवं शुद्धात्म वंदन!</p>
          <p>
            सर्व प्रथम हम आपका इस जैन परिचय वेबसाइट पर हार्दिक हार्दिक स्वागत
            करते है| यह वेबसाइट जैन समाज विवाह परिचय सम्मेलन का एक डिजिटल स्वरुप
            है। वर्तमान समय में जैन समाज के सुयोग्य युवक और युवतियोंके को अपना
            जीवन साथी चयन करेने में कई समस्याएं आ रही है और इसकी प्रमुख वजह है
            परिचय की कमी| समाज की इसी समस्या का कुछ हद तक समाधान करने के लिए
            हमने इस वेबसाइट का निर्माण किया है|
          </p>
          <p>
            आप को इस वेबसाइट पे अपने युवक या युवती का आवेदन सही जानकारी के साथ
            भरना होगा और बोहोत ही साधारण से शुल्क का भरना करके आप यहाँ पे परिचय
            पत्रिका देख सकते है | केवल एक बार ही शुल्क भरने पर आप जब तक चाहो नए
            नए पंजीकृत बायोडाटा देख सकते है |
          </p>
          <p>
            हम आपके स्वस्थ एवं मंगलमय जीवन की कामना करते हैं एवं आपके
            पुत्र/पुत्री के विवाह हेतु उत्तम चयन में सहायक होना चाहते हैं।
          </p>
          <p>कृपया अपना आवेदन ऊपर दिए बटन पे जमा करे | धन्यवाद्</p>
        </div>
        <br></br>
        <div className="large-space"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Viewone;
