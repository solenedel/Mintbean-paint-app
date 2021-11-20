import React, {useState} from "react";

const Collapsible = () => {

  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <div className="collapsible" style={{color: 'white'}}>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>toggle</button>
      {isOpen && <div className="content">Collapsible content</div>} 
    </div>
   );
}
 
export default Collapsible;