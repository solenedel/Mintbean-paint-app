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

      <img src="./images/color-palette.png" className="palette-icon" alt="paint icon" />

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

      <footer>
        <h2>Meet the developers</h2>
        <div className="devs">
          <div className="dev one">
            <img className="dev-img" src="./images/dev-solene.png" alt="dev one" />
            <h5>Solène</h5>
            <div className="social-icons">
              <i class="fab fa-github" />
              <i class="fab fa-linkedin" />
            </div>
          </div>
          

          <div className="dev two">
            <img className="dev-img" src="./images/dev-gavin.png" alt="dev two" />
            <h5>Gavin</h5>
            <div className="social-icons">
              <i class="fab fa-github" />
              <i class="fab fa-linkedin" />
            </div>
          </div>

        </div>
      </footer>
    </div>
   );
}
 
export default LandingPage;