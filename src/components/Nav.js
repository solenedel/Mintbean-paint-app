import React from 'react';

const Nav = ({ className }) => {
  return ( 
    <nav className={className}>
      <div id="nav-flexbox">
        <img src="./images/art-and-design.png" alt="paint icon" />
        <h2 id="logo">Peinture</h2>
      </div>
    </nav>
   );
};

export default Nav;