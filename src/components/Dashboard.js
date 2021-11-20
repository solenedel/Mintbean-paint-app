import React, {useState} from "react";
import { SketchPicker } from "react-color";
// import {colorVars} from './styled/css-variables';

export const Dashboard = (props) => {

  const { className, changeCanvasColor} = props;

  const [canvasColor, setCanvasColor] = useState("#FFC0D9");
  const[isOpenCanvas, setIsOpenCanvas] = useState(false);
  const[isOpenBrush, setIsOpenBrush] = useState(false);

  return ( 
    <section id="dashboard" className={className}>
      <div className="normal-buttons">
        <button id="undo"><span>Undo</span></button>
        <button id="clear"><span>Clear canvas</span></button>
        <button id="save"><span>Save</span></button>
      </div>
    
      <div className="options" style={{color: 'white'}}>

        <div className="collapsibles">
          <button className="toggle" id="canvas-optn" onClick={() => setIsOpenCanvas(!isOpenCanvas)}><span>Canvas color</span></button>
          {isOpenCanvas && <div className="content canvas">
            <SketchPicker 
              className={'canvas-color-picker'}
              color={canvasColor}
              onChangeComplete={(color) => {setCanvasColor(color.hex)}}/>
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
 
