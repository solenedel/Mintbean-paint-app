import React, { useRef, useEffect, useState } from 'react';
import { StyledDashboard } from './styled/Dashboard.style';

const Canvas = ({ canvasColor, setCanvasColor, className, brushSize, setBrushSize, brushColor, setBrushColor }) => {

  // alert user on page reload
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  // information to conserve between re-renders
  const canvasRef = useRef(null);
  const bkgdCanvasRef = useRef(null);
  const contextRef = useRef(null);
  const bkgdContextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  const setupCanvasAndContext = (canvasRef, contextRef) => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth * 0.7}px`;
    canvas.style.height = `${window.innerHeight * 0.7}px`;
    setDimensions({width: window.innerWidth, height: window.innerHeight});
    canvas.imageSmoothingEnabled = true;
    canvas.imageSmoothingQuality = "high";

    const context = canvas.getContext('2d');
    context.scale(1.45,1.45);
    context.lineCap = 'round';
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize; 
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    contextRef.current = context;
  }


  useEffect(() => {
    setupCanvasAndContext(canvasRef, contextRef);
    // create a hidden canvas for file saving
    setupCanvasAndContext(bkgdCanvasRef, bkgdContextRef);
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
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <div id="canvas-and-dashboard">
      <div className="notify-user"><i class="fas fa-exclamation-circle" /> This app is not designed for mobile phones or tablets.</div>
        <canvas
          id="my-canvas"
          className={className}
          onMouseDown={startDrawing}
          onTouchStart={startDrawing}
          onMouseUp={finishDrawing}
          onTouchEnd={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          style={{backgroundColor: canvasColor}}
        />
        <canvas
            id="canvas-bkgd"
            ref={bkgdCanvasRef}
            style={{display: 'none'}}
        />
        <StyledDashboard
          canvasColor={canvasColor}
          setCanvasColor={setCanvasColor}
          brushColor={brushColor}
          setBrushColor={setBrushColor}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          contextRef={contextRef}
          bkgdContextRef={bkgdContextRef}
          dimensions={dimensions}
        />
    </div>
  )
};

export default Canvas;
