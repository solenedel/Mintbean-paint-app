import React from "react";
import Collapsible from "./Collapsible";
// import {colorVars} from './styled/css-variables';

export const Dashboard = (props) => {

  const { className, changeCanvasColor } = props;

  return ( 
    <section id="dashboard" className={className}>
      <button id="undo"><span>Undo</span></button>
      <button id="clear"><span>Clear canvas</span></button>
      <button id="brush-optn"><span>Brush options</span></button>
      <Collapsible label="brush options"/>

      <button id="canvas-optn"
      onClick={() => changeCanvasColor()}><span>Canvas color</span></button>
      <Collapsible label="canvas color"/>

      <button id="save"><span>Save</span></button>
    </section>
   );
}
 
