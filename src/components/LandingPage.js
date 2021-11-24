import React from "react";

const LandingPage = ({className}) => {
  return ( 
    <div id="landing-page" className={className}>
      <header>
        <div id="title">Pintura</div>
        <button><a href="/paint">start painting</a></button>
      </header>

      <div className="tagline">
        <h4 id="sentence-1">Stuck in a zoom meeting?</h4>
        <h4 id="sentence-2">Need something to do?</h4>
        <h1 id="sentence-3">try <span id="pintura">Pintura</span> for free!</h1>
      </div>

      <img src="./images/color-palette.png" className="palette-icon" alt="paint icon" />

      <section id="part-1">
        <div className="demo-section">
          <h3>Choose a canvas color ▶</h3>
          <img src="./gifs/canvas-color-demo.gif" className="gif" alt="canvas color demo" width="40%" />
        </div>
      </section>
      <section id="part-2">
        <div className="demo-section B">
          <h3>◀ Select brush color and size</h3>
          <img src="./gifs/brush-demo.gif" className="gif" alt="brush demo" width="40%" />
        </div>
      </section>
      <section id="part-3">
        <div className="demo-section">
          <h3>Save your drawing as a PNG file ▶</h3>
          <img src="./gifs/save-demo.gif" className="gif" alt="brush demo" width="40%" />

        </div>
      </section>
      <section id="part-4">
        <div className="demo-section B">
          <h3>◀ Clear the canvas</h3>
          <img src="./gifs/clear-demo.gif" className="gif" alt="brush demo" width="40%" />
        </div>
      </section>

      <button id="try-pintura"><a href="/paint">try Pintura</a></button>

      <div className="warning">
        <p>This app is designed for <span id="important">desktop and laptop</span> computers. The drawing functionality will not work properly on touchscreens such as phones and tablets.</p>
      </div>

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
                <a href="https://github.com/solenedel"><i class="fab fa-github" /></a>
                <a href="https://www.linkedin.com/in/solene-delumeau"><i class="fab fa-linkedin" /></a>
              </div>
            </div>
            

            <div className="dev two">
              <div className="name-pic">
                <img className="dev-img" src="./images/dev-gavin.png" alt="dev two" />
              </div>
              <div className="social-icons">
              <h5>Gavin</h5>
                <a href="https://github.com/geecrypt"><i class="fab fa-github" /></a>
                <a href="https://www.linkedin.com/in/gacquroff"><i class="fab fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h3>Built with </h3>
          <div className="tools">
            <i class="fab fa-react" />
            <i class="fab fa-html5" />
            <i class="fab fa-css3-alt" />
          </div>
        </div>

      </footer>
    </div>
   );
}
 
export default LandingPage;