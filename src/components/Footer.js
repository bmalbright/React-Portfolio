import React from "react";
import './css/App.css';

function Footer () {
  return (
      <div class="footer">
      <ul className="footerLinks">
          <li className="footerItem">
          <a href="https://www.linkedin.com/in/brian-albright-95017533" 
              target="_blank" 
              rel="noopener noreferrer">
              LinkedIn</a>
          </li>
          <li className="footerItem">
          <a href="https://www.twitter.com/BAlbright01" 
              target="_blank" 
              rel="noopener noreferrer">
              Twitter</a>
          </li>
          <li className="footerItem">
          <a href="https://github.com/bmalbright" 
              target="_blank" 
              rel="noopener noreferrer">
              Github</a>
          </li>
      </ul>
      </div>
  )  
}


export default Footer;