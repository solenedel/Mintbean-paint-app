import React, {useState} from "react";
import { SketchPicker } from "react-color";
import { saveAs } from 'file-saver';
// import {colorVars} from './styled/css-variables';

export const Dashboard = (props) => {

  const { className, canvasColor, setCanvasColor, brushColor, setBrushColor, brushSize, setBrushSize, contextRef, dimensions } = props;

  const[isOpenCanvas, setIsOpenCanvas] = useState(false);
  const[isOpenBrushColor, setIsOpenBrushColor] = useState(false);
  const[isOpenBrushSize, setIsOpenBrushSize] = useState(false);

  const clearCanvas = (contextRef, dimensions) => {
    contextRef.current.clearRect(0, 0, dimensions.width, dimensions.height);
  };

  // save a TRANSPARENT (no canvas) doc in PNG format
  const saveCanvas = () => {
    // Notes for feature: add canvas background
    // create canvas with same dimensions (id: save-canvas)
    // use fillRect with canvas color
    // draw image with first canvas( id: my-canvas) (transparent bkgrd)
    
    const canvas = document.getElementById("my-canvas");
    canvas.toBlob(function(blob) {
        saveAs(blob, "my-artwork.png");
    });
  }

    //ERASER FUNCTION- CHANGE COLOR TO CANVAS COLOR
    // contextRef.current.strokeStyle = 'red';


  return ( 
    <section id="dashboard" className={className}>
      <div className="normal-buttons">
        <button id="undo"><span>Undo</span></button>
        <button id="clear" onClick={() => clearCanvas(contextRef, dimensions)}><span>Clear canvas</span></button>
        <button id="save" onClick={saveCanvas}><span>Save</span></button>
      </div>
    
      <div className="options">

        <div className="collapsibles">
          <button className="toggle" id="canvas-optn" onClick={() => setIsOpenCanvas(!isOpenCanvas)}><span>Canvas color</span></button>
          {isOpenCanvas && <div className="content canvas">
            <SketchPicker 
              className={'canvas-color-picker'}
              color={canvasColor}
              onChangeComplete={setCanvasColor} />
          </div>} 
        </div>
      
        <div className="collapsibles">
          <button className="toggle" id="brush-optn" onClick={() => setIsOpenBrushColor(!isOpenBrushColor)}><span>Brush Color</span></button>
          {isOpenBrushColor && <div className="content brush">
          <SketchPicker 
              className={'brush-color-picker'}
              color={brushColor}
              onChangeComplete={setBrushColor} />
          </div>} 
        </div>

        <div className="collapsibles">
          <button className="toggle" id="brush-size" onClick={() => setIsOpenBrushSize(!isOpenBrushSize)}><span>Brush Size</span></button>
          {isOpenBrushSize && <div className="content brush">
          <SketchPicker 
              className={'brush-size-picker'}
              color={brushSize}
              onChangeComplete={setBrushSize} />
          </div>} 
        </div>

      </div>
    </section>
   );
}
 
