import React, {useState} from "react";
import { SketchPicker } from "react-color";
import { saveAs } from 'file-saver';
// import {colorVars} from './styled/css-variables';

export const Dashboard = (props) => {

  const { className, canvasColor, setCanvasColor, contextRef, dimensions } = props;

  // const [canvasColor, setCanvasColor] = useState("#FFC0D9");
  const[isOpenCanvas, setIsOpenCanvas] = useState(false);
  const[isOpenBrush, setIsOpenBrush] = useState(false);

  const clearCanvas = (contextRef, dimensions) => {
    contextRef.current.clearRect(0, 0, dimensions.width, dimensions.height);
  };

  // save a TRANSPARENT (no canvas) doc in PNG format
  const saveCanvas = () => {
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
    
      <div className="options" style={{color: 'white'}}>

        <div className="collapsibles">
          <button className="toggle" id="canvas-optn" onClick={() => setIsOpenCanvas(!isOpenCanvas)}><span>Canvas color</span></button>
          {isOpenCanvas && <div className="content canvas">
            <SketchPicker 
              className={'canvas-color-picker'}
              color={canvasColor}
              onChangeComplete={setCanvasColor}/>
              {/* <button id='canvas-color-confirm-btn' >Set color</button> */}
          </div>} 
        </div>
      
        <div className="collapsibles">
          <button className="toggle" id="brush-optn" onClick={() => setIsOpenBrush(!isOpenBrush)}><span>Brush options</span></button>
          {isOpenBrush && <div className="content brush">Brush options</div>} 
        </div>
      </div>
    </section>
   );
}
 
