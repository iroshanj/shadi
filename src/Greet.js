import lg from "./main-logo.png";

function Greet() {
  const closeModel = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  return (
    <>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closeModel}>
            &times;
          </span>
         <div className="greet-img">
<img src={lg} className="greet-logo"></img>
         </div>
         <div className="space"></div>
         <div>
            <h2 className="view-three">Unlimited Biodata's in only one time  charge of Rs. 501/-</h2>
         </div>
        </div>
      </div>
    </>
  );
}

export default Greet;
