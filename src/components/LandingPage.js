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
        <div className="demo-section">
          <h3>Choose a canvas color</h3>
          <img src="./gifs/canvas-color-demo.gif" alt="canvas color demo" width="40%" />
        </div>
      </section>
      <section id="part-2">
        <div className="demo-section">
          <h3>Select brush color and size</h3>
          <img src="./gifs/brush-demo.gif" alt="brush demo" width="40%" />
        </div>
      </section>
      <section id="part-3">
        <h3>Save your drawing as a PNG file</h3>
      </section>
      <section id="part-4">
        <div className="demo-section">
          <h3>Clear the canvas</h3>
          <img src="./gifs/clear-demo.gif" alt="brush demo" width="40%" />
        </div>
      </section>

      <footer>
        <div className="left-section">
          <h2>Meet the developers</h2>
          <div className="devs">
            <div className="dev one">
              <div className="name-pic">
                <img className="dev-img" src="./images/dev-solene.png" alt="dev one" />
                
              </div>
              <div className="social-icons">
                <h5>Solène</h5>
                <i class="fab fa-github" />
                <i class="fab fa-linkedin" />
              </div>
            </div>
            

            <div className="dev two">
              <div className="name-pic">
                <img className="dev-img" src="./images/dev-gavin.png" alt="dev two" />
              </div>
              <div className="social-icons">
              <h5>Gavin</h5>
                <i class="fab fa-github" />
                <i class="fab fa-linkedin" />
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h3 id="temp">Built with </h3>
          <i class="fab fa-react" />
          <i class="fab fa-html5" />
          <i class="fab fa-css3-alt" />
        </div>

      </footer>
    </div>
   );
}
 
export default LandingPage;