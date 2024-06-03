 import { useNavigate } from "react-router-dom";
 import phonepe from '../images/phonpay.jpg';
function Phonepe() {
  var curUserGen = localStorage.getItem("curUser");
  curUserGen = JSON.parse(curUserGen);
  curUserGen = curUserGen.id;
  const navigate = useNavigate();

  const onLogout = function () {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="dash">
          <div className="bio-center">
            <p><h2> Rs. 501 /- </h2></p>
            <p>
            <img src={phonepe} className="phonepe-logo"></img>
            </p>
            <p className="mobile-num">
                9730345449
            </p>
            
            <p>
              उपरोक्त फ़ोन पे नंबर पर <strong>501/-</strong> रुपये का भुगतान करें. 
            </p>
            <p>
              उपरोक्त व्हाट्सएप नंबर पर फोन पे लेनदेन रसीद भेजें.
            </p>
            <p>
               नीचे दी गई <strong>UNIQ KEY</strong> व्हाट्सएप संदेश पर भेजें।
            </p>
            <p>
              <h2> UNIQ KEY </h2><h3>{curUserGen}</h3>
            </p>
            <p>जानकारी की जांच करने के बाद आपकी प्रोफाइल सक्रिय हो जाएगी.</p>
            <p>कृपया प्रोफ़ाइल सक्रिय होने तक प्रतीक्षा करें क्योंकि इसमें कुछ समय लग सकता है।</p>
             
         
           
            <p>
            <button onClick={onLogout} className="btn-primary">
            लॉग आउट करने के लिए क्लिक करें
              </button>
            </p>
            
            <div className="space"></div>
            
            <p>
              <div className="space"></div>
              
            </p>
          </div>
         </div>
    </>
  );
}

export default Phonepe;
