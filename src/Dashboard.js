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
      const response = await fetch(`${rooturl}/user`);
      var jsonData = await response.json();
      jsonData = jsonData.filter(function (i) {
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

        {paystatus?(<div className=" ">
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
        {!paystatus ?(
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

        {paystatus && (allCards.length == 0)? (
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

        {paystatus && (allCards.length > 0) ? (
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
              <div className="can-name">{allCards[cardToShow]?.name}</div>
              <div className="space"></div>
              <div className="can-job">{allCards[cardToShow]?.profession}</div>
              <div className="space"></div>
              <div className="can-office">
                {allCards[cardToShow]?.oficelocation}
              </div>
              <div className="space"></div>

              <div className="name-holder">
              <div className="bio-row">
                  <div className="heading">वैवाहिक स्थिति</div>
                  <div className="data">{allCards[cardToShow]?.marstatus}</div>
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
                  <div className="heading">शिक्षा</div>
                  <div className="data">{allCards[cardToShow]?.education}</div>
                </div>

                <div className="bio-row">
                  <div className="heading">मासिक आय</div>
                  <div className="data">{allCards[cardToShow]?.income}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">मोबाइल नंबर </div>
                  <div className="data">{allCards[cardToShow]?.mobile}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">माता/पिता</div>
                  <div className="data">{allCards[cardToShow]?.father}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">माता/पिता मोबाइल </div>
                  <div className="data">{allCards[cardToShow]?.contact}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">जाति विवरण</div>
                  <div className="data">{allCards[cardToShow]?.cast}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">अपेक्षाएं</div>
                  <div className="data">{allCards[cardToShow]?.expected}</div>
                </div>
                <div className="bio-row">
                  <div className="heading">स्थायी पता</div>
                  <div className="data">{allCards[cardToShow]?.address}</div>
                </div>
              </div>
            </div>
          </div>
        ):null}
      </div>
    </>
  );
}

export default Dashboard;
