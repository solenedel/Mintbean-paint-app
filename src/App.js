import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledCanvas } from './components/styled/Canvas.style';
import { GlobalStyles } from './components/styled/GlobalStyles.style';
import { StyledNav } from './components/styled/Nav.style';
import { StyledFooter } from './components/styled/Footer.style';


function App() {

  const [canvasColor, setCanvasColor] = useState("#FFC0D9");
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState("14");

  // persist canvas color on page reload
  useEffect(() => {
    const data = localStorage.getItem('canvasColor');
    if(data) setCanvasColor(JSON.parse(data));
    }, []);

  useEffect(() => {
    localStorage.setItem('canvasColor', JSON.stringify(canvasColor));
    console.log('setting canvas color', canvasColor);
    }, [canvasColor]);
  

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path="/">
            <GlobalStyles />
            <StyledNav />
            <div id="canvas-container">
              <StyledCanvas
                canvasColor={canvasColor}
                setCanvasColor={(color) => {
                  setCanvasColor(color.hex);
                }}
                brushColor={brushColor}
                setBrushColor={(color) => {
                  console.log('brush color.hex', color.hex);
                  setBrushColor(color.hex);
                }}
                brushSize={brushSize}
                setBrushSize={setBrushSize}
              />
            </div>
            <StyledFooter />
          </Route>

          <Route exact path="/landing-page">
              <div>this is the landing page</div>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
};

export default App;
