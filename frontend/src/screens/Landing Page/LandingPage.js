import React from "react";
import "./LandingPage.css";

import Notess from "../../images/notess.png";
function LandingPage() {
  return (
    <div className="land">
      <div className="land_left">
        <h2>Welcome to SafeNote !</h2>
        <p>
          Store your Notes in one of the Safest Online Notes Provider and
          retrieve them in a go. Build on MERN stack , this is one of the
          fastest Notes Provider.
        </p>
        <div className="land_btns">
          <button className="land_login">Login</button>
          <button className="land_signup">Sign Up</button>
        </div>
      </div>
      <div className="land_right">
        <img className="land_img" src={Notess} alt="notes" />
      </div>
    </div>
  );
}

export default LandingPage;
