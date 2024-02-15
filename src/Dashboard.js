import React, { useState,useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Dashboard() {
  var curUserGen = localStorage.getItem('curUser'); 
curUserGen =  JSON.parse(curUserGen);
 
curUserGen = curUserGen.gender;
  const navigate = useNavigate();
  const [allCards,setCards] = useState([]);
  const [cardToShow,setCardToShow] = useState(0);
  const [paystatus,setPayStatus] = useState(curUserGen.paystatus);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://parichay-sammelan-93745ade9b69.herokuapp.com/user');
      var jsonData = await response.json();
      jsonData = jsonData.filter(function(i){
        return i.gender != curUserGen;
      })
      console.log(jsonData);
         setCards(jsonData.reverse());
      
    }
    fetchData();
    
  },[]);

  const Next = function(){
      if(cardToShow == allCards.length-1){
        setCardToShow(cardToShow)
      }else{
        setCardToShow(cardToShow+1)

      }
    
  }
  const Prev = function(){
    if(cardToShow==0){
      setCardToShow(0)
    }else{
      setCardToShow(cardToShow-1)
    }
   
  }

  const handlePayment = function(){
    setPayStatus(1);
  }

  const onLogout = function(){
    localStorage.clear();
    navigate("/");
  }
 
  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="logo">प्रत्याशी परिचय पत्रिका </div>
        <div className=" ">
        
          <button className="btn-create" onClick={onLogout}>
          लॉग आउट
          </button>
          
        </div>
      </div>
      <div className="space"></div>
      <div className="dash">
         
      {!paystatus &&<div className="bio-center">
          <p>
          <strong>प्रत्याशी परिचय पत्रिका देखने के लिए कृपया भुगतान करें</strong>
          </p>
          <div className="space"></div>
          <span className="currency">
          ७०१/-
          </span>
          <p>
          <div className="space"></div>
          <button onClick={handlePayment} className="btn-primary">Pay Now</button>
          </p>
          </div> }
          
      {paystatus&& allCards.length==0 &&<div className="bio-center">
          <p>
          <strong>अभी सिस्टम में कोई भी बायोडाटा पंजीकृत नहीं है। जब भी नए पंजीकरण होंगे, वे यहां उपलब्ध होंगे। कृपया नया पंजीकरण होने तक प्रतीक्षा करें।</strong>

          </p>
          <div className="space"></div>
           
          
          </div>}

         

         {paystatus&& allCards.length>0 &&<div className="bio">
         <div className="space"></div>
         <div className="space"></div>
           <div className="btn-container">
           <button onClick={Prev} className="btn-primary">Prev</button>
           <button onClick={Next} className="btn-primary">Next</button>
           </div>
           <div className="space"></div>
           <div className="card-container">
            <div className="pic-holder">
            <img className="p-icon" src={allCards[cardToShow]?.url}></img>
            </div>
            <div className="space"></div>
             <div><strong>प्रत्याशी क्रमांक :</strong> {allCards[cardToShow]?._id}</div>    
            <div className="name-holder">
              <div className="bio-row">
                <div className="heading">प्रत्याशी का नाम </div>
                <div className="data">{allCards[cardToShow]?.name}</div>
              </div>
              <div className="bio-row">
                <div className="heading">जन्म तिथि</div>
                <div className="data">{allCards[cardToShow]?.dob}</div>
              </div>
              <div className="bio-row">
                <div className="heading">Gender</div>
                <div className="data">{allCards[cardToShow]?.gender}</div>
              </div>
              <div className="bio-row">
                <div className="heading">पेशा</div>
                <div className="data">{allCards[cardToShow]?.profession}</div>
              </div>
              <div className="bio-row">
                <div className="heading">शिक्षा</div>
                <div className="data">{allCards[cardToShow]?.education}</div>
              </div>
              <div className="bio-row">
                <div className="heading">नौकरी का पता </div>
                <div className="data">{allCards[cardToShow]?.oficelocation}</div>
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
                <div className="heading">माता/पिता का नाम </div>
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
                <div className="heading">स्थायी पता</div>
                <div className="data">{allCards[cardToShow]?.address}</div>
              </div>
         </div>

           </div>
           

         </div>}
            </div>
    </>
  );
}

export default Dashboard;
