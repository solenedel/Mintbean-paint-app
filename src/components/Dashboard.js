import React, {useState} from "react";
// import {colorVars} from './styled/css-variables';

export const Dashboard = (props) => {

  const { className, changeCanvasColor} = props;

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
          {isOpenCanvas && <div className="content">Canvas color options</div>} 
        </div>
      
        <div className="collapsibles">
          <button className="toggle" id="brush-optn" onClick={() => setIsOpenBrush(!isOpenBrush)}><span>Brush options</span></button>
          {isOpenBrush && <div className="content">Brush options</div>} 
        </div>
      </div>
    </section>
   );
}
 
