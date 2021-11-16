import React from "react";

export const Dashboard = ({className}) => {
  return ( 
    <section id="dashboard" className={className}>
      <button>Undo</button>
      <button>Clear canvas</button>
      <button>Save</button>
      <button>Brush options</button>
      <button>Canvas options</button>
    </section>
   );
}
 
