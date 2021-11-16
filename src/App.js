import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {

  // information to conserve between re-renders
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.width.style = `${window.innerWidth}px`;
    canvas.height.style = `${window.innerHeight}px`;
    
    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.lineCap = 'round';
    context.strokeStyle = 'black'; //NOTE: user will be able to choose this later
    context.lineWith = 5; // NOTE: user will be able to choose this later
    contextRef.current = context;
  }, []);

  const startDrawing = () => {

  };

  const finishDrawing = () => {

  };

  const draw = () => {

  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default App;
