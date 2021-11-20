import React, {useState, useEffect} from 'react';
import { StyledCanvas } from './components/styled/Canvas.style';
import { GlobalStyles } from './components/styled/GlobalStyles.style';
import { StyledNav } from './components/styled/Nav.style';
import { StyledFooter } from './components/styled/Footer.style';


function App() {

  const [canvasColor, setCanvasColor] = useState("#FFC0D9");


  // persist canvas color on page reload
  useEffect(() => {
    const data = localStorage.getItem('canvasColor');
    if(data) setCanvasColor(JSON.parse(data));
    }, []);

  useEffect(() => {
    localStorage.setItem('canvasColor', JSON.stringify(canvasColor));
    });
  
  

  return (
    <div className="app">
      <GlobalStyles />
      <StyledNav />
      <div id="canvas-container">
        <StyledCanvas
        canvasColor={canvasColor}
        setCanvasColor={(color) => {setCanvasColor(color.hex)}} />
      </div>
      <StyledFooter />
    </div>
  )
}

export default App;
