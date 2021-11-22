import React from "react";

const LandingPage = ({className}) => {
  return ( 
    <div id="landing-page" className={className}>
      <header>
        <div id="title">Pintura</div>
        <button><a href="/">start painting</a></button>
      </header>

      <div className="tagline">
        <h4 id="sentence-1">Stuck in a zoom meeting?</h4>
        <h4 id="sentence-2">Need something to do?</h4>
        <h1 id="sentence-3">try <span id="pintura">Pintura</span> for free!</h1>
      </div>

      <img src="./images/color-palette.png" alt="paint icon" />

      <section id="part-1">
        <h3>Choose a canvas color</h3>
      </section>
      <section id="part-2">
        <h3>Select brush color and size</h3>
      </section>
      <section id="part-3">
        <h3>Save your drawing as a PNG file</h3>
      </section>
      <section id="part-4">
        <h3>Clear the canvas</h3>
      </section>
    </div>
   );
}
 
export default LandingPage;