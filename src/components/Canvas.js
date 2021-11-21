import React, { useRef, useEffect, useState } from 'react';
import { StyledDashboard } from './styled/Dashboard.style';

const Canvas = ({ canvasColor, setCanvasColor, className }) => {

  // alert user on page reload
  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);

  // const alertUser = (e) => {
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  // information to conserve between re-renders
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth * 0.7}px`;
    canvas.style.height = `${window.innerHeight * 0.7}px`;
    setDimensions({width: window.innerWidth, height: window.innerHeight });
    canvas.imageSmoothingEnabled = true;
    canvas.imageSmoothingQuality = "high";

    const context = canvas.getContext('2d');
    context.scale(1.45,1.45);
    context.lineCap = 'round';
    context.strokeStyle = 'black'; //NOTE: user will be able to choose this later
    context.lineWidth = 8; // NOTE: user will be able to choose this later
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
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
    <div id="canvas-and-dashboard">
        <canvas
          id="my-canvas"
          className={className}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          style={{backgroundColor: canvasColor}}
        />
        <StyledDashboard
          canvasColor={canvasColor}
          setCanvasColor={setCanvasColor}
          contextRef={contextRef}
          dimensions={dimensions}
        />
    </div>
  )
};

export default Canvas;
