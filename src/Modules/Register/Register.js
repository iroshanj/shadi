import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import {register } from "./Service.js";
 

//Deploy and Host a Fullstack MERN Application Tutorial In Heroku and Netlify
function Register() {
  const navigate = useNavigate();

  const [showUpload, setShowUpload] = useState(false);
  const [clickedUpload, setClickedUpload] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(true);
  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [gender, setGender] = useState(0);
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState(null);
  const [profession, setProfession] = useState(null);
  const [jobLocation, setJobLocation] = useState(null);
  const [parentName, setParentName] = useState(null);
  const [motherName, setMotherName] = useState(null);
  const [sib, setSib] = useState(null);
  const [sgotra, setsgotra] = useState(null);
  const [expected, setexpected] = useState(null);
  const [mgotra, setmgotra] = useState(null);
  const [parentContact, setParentContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState("");
  const [income, setIncome] = useState(null);
  const [cast, setCast] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [pob, setPob] = useState(null);
  const [tob, setTob] = useState(null);
  const [height, setHeight] = useState(null);
 

  const onSave = async function (e) {
    //var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    // var regMob = /^\d{10}$/;
    var reMail = /\S+@\S+\.\S+/;

    if (clickedUpload == false) {
      alert("कृपया अपना फोटो चुनें और अपलोड पर क्लिक करें");
    } else if (gender == 0) {
      alert("कृपया लड़का या लड़की चुनें");
    } else if (name == null) {
      alert("प्रत्याशी का नाम दर्ज करें");
    } else if (dob == null) {
      alert("जन्म तिथि दर्ज करें");
    } else if (tob == null) {
      alert("जन्म का समय दर्ज करें");
    } else if (pob == null) {
      alert("जन्म स्थान दर्ज करें");
    } else if (height == null) {
      alert("ऊंचाई दर्ज करें");
    }  else if (mobile == null) {
      alert("दस अंकों का मोबाइल नंबर दर्ज करें");
    } else if (!reMail.test(email)) {
      alert("वैध ईमेल आईडी दर्ज करें");
    } else if (education == null) {
      alert("अपनी शिक्षा दर्ज करें");
    } else if (profession == null) {
      alert("अपना पेशा दर्ज करें");
    } else if (jobLocation == null) {
      alert("नौकरी/व्यवसाय का पता दर्ज करें");
    } else if (typeof income == "object" || parseInt(income) < 0) {
      alert("मासिक आय दर्ज करे ");
    } else if (parentName == null || motherName == null ) {
      alert("माता पिता का नाम दर्ज करें");
    } else if (sib == null) {
      alert("भाई बहन की संख्या दर्ज करें");
    }else if (parentContact == null) {
      alert("अपने माता/पिता का मोबाइल नंबर दर्ज करें");
    } else if (cast == null) {
      alert("अपनी जाति का विवरण दर्ज करें");
    } else if (sgotra == null || mgotra == null) {
      alert("गोत्र दर्ज करें");
    } else if (password.length < 8) {
      alert("आपका पासवर्ड कम से कम 8 अक्षर लंबा होना चाहिए");
    }  else if (address == null) {
      alert("अपना स्थायी पता दर्ज करें");
    } else {
      const dataObj = {
        paystatus: 0,
        transid: "id",
        name: name,
        father: parentName,
        mother: motherName,
        sib:sib,
        sgotra:sgotra,
        mgotra:mgotra,
        fathejob: "Businessman",
        dob: dob,
        pob: pob,
        tob: tob,
        mobile: mobile,
        gender: gender,
        email: email,
        pass: password,
        education: education,
        profession: profession,
        contact: parentContact,
        oficelocation: jobLocation,
        address: address,
        role: 1,
        income: income,
        cast: cast,
        url: url,
        height:height,
        marstatus:100,
        expected:expected
      };

      e.preventDefault();
      
      const result = await register(dataObj);

      if (result.status== true) {
        navigate("/success");
      } else {
      }
    }
  };

  const handleDataGender = function (e) {
    setGender(e.target.value);
  };
  const handleHeight = function (e) {
    
    setHeight(e.target.value);
  };
  const handleFile = function (e) {
    setFile(e.target.files[0]);
    setShowUpload(true);
  };
   
  const onImageUpload = async function (e) {
    setClickedUpload(true);
    setShowFileUpload(false);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`https://shagunpal.online/upload.php`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    let updatedurl = `https://shagunpal.online/uploads/${result.url}`;
    setUrl(updatedurl);
   
  };
  const handleData = function (e) {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "dob") {
      setDob(e.target.value);
    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name == "gender") {
      setGender(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "education") {
      setEducation(e.target.value);
    } else if (e.target.name == "profession") {
      setProfession(e.target.value);
    } else if (e.target.name == "oficelocation") {
      setJobLocation(e.target.value);
    } else if (e.target.name == "father") {
      setParentName(e.target.value);
    } else if (e.target.name == "mother") {
      setMotherName(e.target.value);
    } else if (e.target.name == "sib") {
      setSib(e.target.value);
    } else if (e.target.name == "sgotra") {
      setsgotra(e.target.value);
    } else if (e.target.name == "mgotra") {
      setmgotra(e.target.value);
    }else if (e.target.name == "contact") {
      setParentContact(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "income") {
      setIncome(e.target.value);
    } else if (e.target.name == "cast") {
      setCast(e.target.value);
    } else if (e.target.name == "tob") {
      setTob(e.target.value);
    } else if (e.target.name == "pob") {
      setPob(e.target.value);
    } else if (e.target.name == "expected") {
      setexpected(e.target.value);
    }    
  };

  const btnUpload = showUpload ? (
    <button className="btn-save" onClick={onImageUpload}>
      upload
    </button>
  ) : null;

  return (
    <>
      <div className="top-bar-color"></div>
      <div className="space"></div>
      <div className="app-header">
        <div className="mah">जानकारी हिंदी भाषा में दर्ज कर सकते हैं|</div>
        <div className=" ">
          <Link to="/">
            <button className="btn-create">रद्द करें</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
      <div className="bap">
        <div class="container">
          {showFileUpload && (
            <div class="row">
              <div class="col-90">
                <label for="images" class="drop-container" id="dropcontainer">
                  <span class="drop-title">प्रत्याशी फोटो अपलोड करें</span>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFile}
                    id="images"
                    accept="image/*"
                    required
                  ></input>
                  <span class="drop-title"> {btnUpload}</span>
                </label>
              </div>
            </div>
          )}
          <div class="row">
            <div class="col-90">
              <select value={gender} onChange={handleDataGender} id="drop-dwn">
                <option>लड़का/लड़की</option>
                <option value="1">लड़का</option>
                <option value="2">लड़की</option>
              </select>
            </div>
          </div>
          

          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={name}
                name="name"
                placeholder="प्रत्याशी का नाम"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={dob}
                name="dob"
                placeholder="जन्म तिथि"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={tob}
                name="tob"
                placeholder="जन्म का समय 
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={pob}
                name="pob"
                placeholder="जन्म स्थान 
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
           
          <div class="row">
            <div class="col-90">
              <select value={height} onChange={handleHeight} id="drop-dwn">
                <option>ऊंचाई</option>
                <option value="4 feet 0 inches">4 feet 0 inches</option>
                <option value="4 feet 1 inches">4 feet 1 inches</option>
                <option value="4 feet 2 inches">4 feet 2 inches</option>
                <option value="4 feet 3 inches">4 feet 3 inches</option>
                <option value="4 feet 4 inches">4 feet 4 inches</option>
                <option value="4 feet 5 inches">4 feet 5 inches</option>
                <option value="4 feet 6 inches">4 feet 6 inches</option>
                <option value="4 feet 7 inches">4 feet 7 inches</option>
                <option value="4 feet 8 inches">4 feet 8 inches</option>
                <option value="4 feet 9 inches">4 feet 9 inches</option>
                <option value="4 feet 10 inches">4 feet 10 inches</option>
                <option value="4 feet 11 inches">4 feet 11 inches</option>
                <option value="5 feet 0 inches">5 feet 0 inches</option>
                <option value="5 feet 1 inches">5 feet 1 inches</option>
                <option value="5 feet 2 inches">5 feet 2 inches</option>
                <option value="5 feet 3 inches">5 feet 3 inches</option>
                <option value="5 feet 4 inches">5 feet 4 inches</option>
                <option value="5 feet 5 inches">5 feet 5 inches</option>
                <option value="5 feet 6 inches">5 feet 6 inches</option>
                <option value="5 feet 7 inches">5 feet 7 inches</option>
                <option value="5 feet 8 inches">5 feet 8 inches</option>
                <option value="5 feet 9 inches">5 feet 9 inches</option>
                <option value="5 feet 10 inches">5 feet 10 inches</option>
                <option value="5 feet 11 inches">5 feet 11 inches</option>
                <option value="6 feet">6 feet</option>
              </select>
            </div>
          </div>
          
          
           
          
          <div class="row">
            <div class="col-90">
              <input
                type="tel"
                value={mobile}
                name="mobile"
                placeholder="मोबाइल नंबर"
                onChange={handleData}
              ></input>
            </div>
          </div>

          <div class="row">
            <div class="col-90">
              <input
                type="email"
                value={email}
                name="email"
                placeholder="ईमेल"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={education}
                name="education"
                placeholder="शिक्षा"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={profession}
                name="profession"
                placeholder="पेशा"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={jobLocation}
                name="oficelocation"
                placeholder="नौकरी/व्यवसाय का पता
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="number"
                value={income}
                name="income"
                placeholder="मासिक आय
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={parentName}
                name="father"
                placeholder="पिता का नाम"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={motherName}
                name="mother"
                placeholder="माता का नाम"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={sib}
                name="sib"
                placeholder="भाई बहन की संख्या"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={parentContact}
                name="contact"
                placeholder="माता-पिता का मोबाइल नंबर
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={cast}
                name="cast"
                placeholder="धार्मिक विवरण"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={sgotra}
                name="sgotra"
                placeholder="स्वयं का गोत्र"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
                value={mgotra}
                name="mgotra"
                placeholder="मामा का गोत्र"
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="password"
                value={password}
                name="password"
                placeholder="पासवर्ड चुनें
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <textarea
                name="expected"
                value={expected}
                cols="30"
                rows="6"
                placeholder="परिवार के अन्य सदस्यों की जानकारी दर्ज करें। जैसे उनका नाम, आपसे संबंध, इत्यादि
                "
                onChange={handleData}
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <textarea
                name="address"
                value={address}
                cols="30"
                rows="6"
                placeholder="स्थायी पता
                "
                onChange={handleData}
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <button className="btn-save" onClick={onSave}>
                आवेदन जमा करें
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
