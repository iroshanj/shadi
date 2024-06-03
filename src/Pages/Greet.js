import lg from "../images/main-logo.png";

function Greet() {
  const closeModel = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  return (
    <>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div>
          <h4 className="view-three">दिगंबर जैन युवक-युवती परिचय पत्रिका</h4>
          </div>
          <span class="close" onClick={closeModel}>
            &times;
          </span>
         <div className="greet-img">
<img src={lg} className="greet-logo"></img>
         </div>
         <div className="space"></div>
         <div>
            <h3 className="view-three">Lifetime Membership in only one time  charge of Rs. 501/-</h3>
         </div>
        </div>
      </div>
    </>
  );
}

export default Greet;
