import React from 'react';

const Nav = ({ className }) => {
  return ( 
    <nav className={className}>
      <div id="nav-flexbox">
        <div id="title">
          <img src="./images/rgb.png" alt="paint icon" />
          <h2 id="logo">Pintura</h2>
        </div>

        <div id="quote">
          <p>“Everything starts from a dot.” &nbsp; &nbsp; —Vasily Kandinsky</p>
        </div>
      </div>
    </nav>
   );
};

export default Nav;