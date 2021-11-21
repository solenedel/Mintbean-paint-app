import React, { useRef, useEffect, useState } from 'react';
import { StyledDashboard } from './styled/Dashboard.style';

const Canvas = ({ className }) => {

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

  const [canvasColor, setCanvasColor] = useState('#FFC0D9');



  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth * 0.7}px`;
    canvas.style.height = `${window.innerHeight * 0.7}px`;
    canvas.imageSmoothingEnabled = true;
    canvas.imageSmoothingQuality = "high";
    canvas.style.canvasColor = 'blue';
    // console.log('canvas.style.color: ', canvas.style.color);

    const context = canvas.getContext('2d');
    context.scale(1.45,1.45); // PROBLEM HERE
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
        className={className}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{backgroundColor: canvasColor}}
      />
      <StyledDashboard 
      canvasColor={canvasColor}
      setCanvasColor={(color) => {setCanvasColor(color.hex)}}
      />
    </div>
  )
};
 
export default Canvas;
