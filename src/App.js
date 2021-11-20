import React from 'react';
import { StyledCanvas } from './components/styled/Canvas.style';
import { GlobalStyles } from './components/styled/GlobalStyles.style';
import { StyledNav } from './components/styled/Nav.style';
import { StyledFooter } from './components/styled/Footer.style';


function App() {

  return (
    <div className="app">
      <GlobalStyles />
      <StyledNav />
      <div id="canvas-container">
        <StyledCanvas />
      </div>
      <StyledFooter />
    </div>
  )
}

export default App;
