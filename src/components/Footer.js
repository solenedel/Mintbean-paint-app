import React from "react";

const Footer = ({className}) => {
  return ( 
    <footer className={className}>
      <div>
        <h4>This website was made by <a href="https://ca.linkedin.com/in/solene-delumeau">Solène</a> and <a href="https://ca.linkedin.com/in/gacquroff">geecrypt</a></h4>
        <div id="footer-content">
          <ul>
            <div className="credits">
              {/* eslint-disable-next-line */}
            Icons by <a href="https://www.freepik.com" title="Freepik">Freepik </a>
              {/* eslint-disable-next-line */}
            from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
            </div>
          </ul>
          </div>
        </div>
        <img src="./images/palette.png" alt="paint icon" />
    </footer>
   );
}
 
export default Footer;