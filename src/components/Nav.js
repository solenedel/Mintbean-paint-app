import React from 'react';

const Nav = ({ className }) => {
  return ( 
    <nav className={className}>
      <div id="nav-flexbox">
        <div id="logo">Peinture</div>
        <img src="./images/art-and-design.png" alt="paint icon" />
      </div>
    </nav>
   );
};

export default Nav;