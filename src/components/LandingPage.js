import React from "react";

const LandingPage = ({className}) => {
  return ( 
    <div id="landing-page" className={className}>
      <header>
        <div id="title">Pintura</div>
        <button><a href="/">try Pintura</a></button>
      </header>

      <div className="tagline">
        <h4>Stuck in a zoom meeting</h4>
        <h4>Need something to do?</h4>
        <h1>try <span id="pintura">Pintura</span> for free!</h1>
      </div>
    </div>
   );
}
 
export default LandingPage;