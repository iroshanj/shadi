import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rooturl from "./config.js";
function Dashboard() {
  var curUserFromLocal;
  var curUserGen;
  var curUserPayStatus;
  curUserFromLocal = localStorage.getItem("curUser");
  curUserFromLocal = JSON.parse(curUserFromLocal);
  curUserGen = curUserFromLocal.gender;
  curUserPayStatus = curUserFromLocal.paystatus;
  const navigate = useNavigate();
  const [allCards, setCards] = useState([]);
  const [cardToShow, setCardToShow] = useState(0);
  const [paystatus, setPayStatus] = useState(curUserPayStatus);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${rooturl}/biodatagetallusers.php`);
      var jsonData = await response.json();
      jsonData = jsonData.info.filter(function (i) {
        return i.gender != curUserGen;
      });
      jsonData = jsonData.filter(function (i) {
        return i.paystatus == 1;
      });

      console.log(jsonData);
      setCards(jsonData.reverse());
    };
    fetchData();
  }, []);

  const Next = function () {
    if (cardToShow == allCards.length - 1) {
      setCardToShow(0);
    } else {
      setCardToShow(cardToShow + 1);
    }
  };
  const Prev = function () {
    if (cardToShow == 0) {
      setCardToShow(allCards.length - 1);
    } else {
      setCardToShow(cardToShow - 1);
    }
  };

  const handlePayment = function () {
    //setPayStatus(1);
    navigate("/phonepe");
  };

  const onMyProfile = function () {
    //localStorage.clear();
    navigate("/myprofile");
  };
  const onLogout = function () {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="top-bar-color"></div>

      <div className="space"></div>

      <div className="app-header">
        <div className="logo"> </div>
           
        {paystatus==1?(<div className=" ">
          <button className="btn-create" onClick={onMyProfile}>
            अपनी प्रोफाइल देखें
          </button>
        </div>):null}

        <div className=" ">
          <button className="btn-create" onClick={onLogout}>
            लॉग आउट
          </button>
        </div>
      </div>

      <div className="space"></div>

      <div className="dash">
        {paystatus==0 ?(
          <div className="bio-center">
            <p>
              <strong>
              अपना बायोडाटा प्रकाशित करने के लिए भुगतान करें
              </strong>
            </p>
            <div className="space"></div>
            <span className="currency">५०१ /-</span>
            <p>
              <div className="space"></div>
              <button onClick={handlePayment} className="btn-primary">
                Pay
              </button>
            </p>
          </div>
        ):null}

        {paystatus==1 && (allCards.length == 0)? (
          <div className="loader-bap">
             
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
             <div className="loader"></div>
            
          </div>
        ):null}

        {paystatus==1 && (allCards.length > 0) ? (
          <div className="bio">
            <div className="space"></div>
            <div className="space"></div>
            <div className="btn-container">
              <button onClick={Prev} className="btn-primary">
                Prev
              </button>
              <strong>प्रत्याशी परिचय पत्रिका</strong>
              <button onClick={Next} className="btn-primary">
                Next
              </button>
            </div>
            <div className="space"></div>
            <div className="card-container">
              <div className="pic-holder">
                <img className="p-icon" src={allCards[cardToShow]?.url}></img>
              </div>
              <div className="space"></div>
           
              <div className="space"></div>
               
              <div className="space"></div>
               
              <div className="space"></div>
              
              <div className="space"></div>

             
              <div className="space"></div>
                <div className="space"></div>
               
              <div className="name-holder">
              <div className="bio-row">
                  <div className="heading">नाम</div>
                  <div className="data">{allCards[cardToShow]?.name}</div>
                </div>
              <div className="bio-row">
                  <div className="heading">शिक्षा</div>
                  <div className="data">{allCards[cardToShow]?.education}</div>
                </div>
              <div className="bio-row">
                  <div className="heading">पेशा</div>
                  <div className="data">{allCards[cardToShow]?.profession}</div>
                </div>
              <div className="bio-row">
                  <div className="heading">पेशे का स्थान</div>
                  <div className="data">{allCards[cardToShow]?.oficelocation}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">ऊंचाई</div>
                  <div className="data">{allCards[cardToShow]?.height}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म तिथि</div>
                  <div className="data">{allCards[cardToShow]?.dob}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म समय </div>
                  <div className="data">{allCards[cardToShow]?.tob}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जन्म स्थान </div>
                  <div className="data">{allCards[cardToShow]?.pob}</div>
                </div>

                 

                <div className="bio-row">
                  <div className="heading">मासिक आय</div>
                  <div className="data">{allCards[cardToShow]?.income}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">पिता</div>
                  <div className="data">{allCards[cardToShow]?.father}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">माता</div>
                  <div className="data">{allCards[cardToShow]?.mother}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">भाई-बहन</div>
                  <div className="data">{allCards[cardToShow]?.sib}</div>
                </div>
                
                <div className="bio-row">
                  <div className="heading">धार्मिक विवरण</div>
                  <div className="data">{allCards[cardToShow]?.cast}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">स्वयं गोत्र</div>
                  <div className="data">{allCards[cardToShow]?.sgotra}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">मामा गोत्र</div>
                  <div className="data">{allCards[cardToShow]?.mgotra}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">अन्य</div>
                  <div className="data">{allCards[cardToShow]?.expected}</div>
                </div>
                
                <div className="bio-row">
                  <div className="heading">स्थायी पता</div>
                  <div className="data">{allCards[cardToShow]?.address}</div>
                </div>
                

                
              </div>


             


              <div className="line-seperator"></div>
              <div className="space"></div>
                <div className="heading-sampark">
                   संपर्क सूत्र
                </div>
                <div className="space"></div>
                <div className="line-seperator"></div>

                <div className="">
                   <h2>संपर्क-1</h2>
                   <p className="data">{allCards[cardToShow]?.email}</p>
                </div>
                <div className="">
                   <h2>संपर्क-2</h2>
                   <p className="data">{allCards[cardToShow]?.mobile}</p>
                </div>
                <div className="">
                   <h2>संपर्क-3</h2>
                   <p className="data">{allCards[cardToShow]?.contact}</p>
                </div>
              
            </div>
          </div>
        ):null}
      </div>
    </>
  );
}

export default Dashboard;
