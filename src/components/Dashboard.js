import React from "react";

export const Dashboard = ({className}) => {


  return ( 
    <section id="dashboard" className={className}>
      <button id="undo"><span>Undo</span></button>
      <button id="clear"><span>Clear canvas</span></button>
      <button id="brush-optn"><span>Brush options</span></button>
      <button id="canvas-optn"><span>Canvas color</span></button>
      <button id="save"><span>Save</span></button>
    </section>
   );
}
 
