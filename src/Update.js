import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import rooturl from "./config.js";

//Deploy and Host a Fullstack MERN Application Tutorial In Heroku and Netlify
function Update() {
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
  const [parentName, setParentName] = useState("");
  const [parentContact, setParentContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState("");
  const [income, setIncome] = useState(null);
  const [cast, setCast] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [pob, setPob] = useState(null);
  const [tob, setTob] = useState(null);

  var curUserGen = localStorage.getItem("curUser");
  curUserGen = JSON.parse(curUserGen);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${rooturl}/user`);
      var jsonData = await response.json();
      jsonData = jsonData.filter(function (i) {
        return i._id == curUserGen._id;
      });
      console.log("From Update compo");
      console.log(jsonData);
      //setCards(jsonData);
      setTob(jsonData[0].tob);
      setDob(jsonData[0].dob);
      setPob(jsonData[0].pob);
      setMobile(jsonData[0].mobile);
      setEducation(jsonData[0].education);
      setProfession(jsonData[0].profession);
      setParentContact(jsonData[0].contact);
      setJobLocation(jsonData[0].oficelocation);
      setIncome(jsonData[0].income);
      setCast(jsonData[0].cast);
      setAddress(jsonData[0].address);
      setEmail(jsonData[0].email);
      setUrl(jsonData[0].url);
    };
    fetchData();
  }, []);

  const onSave = async function (e) {
    var reMail = /\S+@\S+\.\S+/;

    if (clickedUpload == false) {
      alert("कृपया अपना फोटो चुनें और अपलोड पर क्लिक करें");
    } else {
      const dataObj = {
        id: curUserGen._id,
        paystatus: 0,
        transid: "id",
        name: name,
        father: parentName,
        fathejob: "Businessman",
        dob: dob,
        pob: pob,
        tob: tob,
        mobile: mobile,
        gender: gender,
        email: email,
        password: password,
        education: education,
        profession: profession,
        contact: parentContact,
        oficelocation: jobLocation,
        address: address,
        role: 1,
        income: income,
        cast: cast,
        url: url,
      };
      console.log(dataObj);

      e.preventDefault();
      const response = await fetch(`${rooturl}/update`, {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (typeof result !== null) {
        localStorage.clear();
        navigate("/update-success");
      } else {
      }
    }
  };

  const handleDataGender = function (e) {
    setGender(e.target.value);
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
    let updatedurl = `https://shagunpal.online/uploads/${result.url}`
    setUrl(updatedurl);
    console.log('GGGG',result);
  };
  /*const onImageUpload = async function (e) {
    setClickedUpload(true);
    setShowFileUpload(false);
    const formData = new FormData();
    formData.append("photo", file);
    const response = await fetch(`${rooturl}/upload`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setUrl(result.url);
  };*/
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
    } else if (e.target.name == "contact") {
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
      <div className="mah">जानकारी सही से दर्ज करे ताकि अन्य प्रत्याशी आपसे संपर्क कर सके। </div>
        <div className=" ">
          <Link to="/myprofile">
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
                  <span class="drop-title">अपनी फोटो अपलोड करें</span>
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
              <input
                type="text"
                value={dob}
                name="dob"
                placeholder="जन्म दिनांक
                "
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
                placeholder="नौकरी का पता
                "
                onChange={handleData}
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-90">
              <input
                type="text"
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
                placeholder="जाति विवरण"
                onChange={handleData}
              ></input>
            </div>
          </div>

          <div class="row">
            <div class="col-90">
              <textarea
                name="address"
                value={address}
                cols="30"
                rows="10"
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

export default Update;
