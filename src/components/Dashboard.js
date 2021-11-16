import React from "react";

export const Dashboard = ({className}) => {
  return ( 
    <section id="dashboard" className={className}>
      <button id="undo">Undo</button>
      <button id="clear">Clear canvas</button>
      <button id="brush-optn">Brush options</button>
      <button id="canvas-optn">Canvas options</button>
      <button id="save">Save</button>
    </section>
   );
}
 
