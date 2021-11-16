import React from 'react';
import { StyledCanvas } from './components/styled/Canvas.style';
import { GlobalStyles } from './components/styled/GlobalStyles.style';

function App() {

  return (
    <div className="app">
      <GlobalStyles />
      <div id="canvas-container">
        <StyledCanvas />
      </div>
    </div>
  )
}

export default App;
