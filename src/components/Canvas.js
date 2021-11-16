import React, { useRef, useEffect, useState } from 'react';

const Canvas = ({ className }) => {
  // information to conserve between re-renders
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth * 0.8}px`;
    canvas.style.height = `${window.innerHeight * 0.8}px`;
    
    const context = canvas.getContext('2d');
    context.scale(1.26,1.26);
    context.lineCap = 'round';
    context.strokeStyle = 'purple'; //NOTE: user will be able to choose this later
    context.lineWith = 15; // NOTE: user will be able to choose this later
    contextRef.current = context;
  }, []);

  // triggered when user presses down on the mouse
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    // only draw if the mouse is pressed down
    // use this Word Clause format to decrease nesting
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

  };

  return (
      <canvas
      className={className}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
};
 
export default Canvas;
