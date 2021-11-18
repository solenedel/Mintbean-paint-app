import React from "react";

const Footer = ({className}) => {
  return ( 
    <footer className={className}>
        <h4>This website was made by: </h4>
        <div id="footer-content">
        <ul>
          <div className="credits">
            {/* eslint-disable-next-line */}
          Icons by <a href="https://www.freepik.com" title="Freepik">Freepik </a>
            {/* eslint-disable-next-line */}
          from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
          </div>
        </ul>
        {/* <div className="social-icons">
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook" />
        </div> */}
      </div>
    </footer>
   );
}
 
export default Footer;