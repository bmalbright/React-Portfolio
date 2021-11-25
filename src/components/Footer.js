import React from "react";
import './css/App.css';
import logo from "./images/icon-76.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer () {
  return (
    <div class="footer">
        <Row>
            <Col>
                <img className="img-responsive" src={logo} alt="logo" />
            </Col>
            <Col>
                <a href="https://www.linkedin.com/in/brian-albright-95017533" 
                target="_blank" 
                rel="noopener noreferrer">
                LinkedIn</a>
            </Col>    
            <Col>
                <a href="https://www.twitter.com/BAlbright01" 
                target="_blank" 
                rel="noopener noreferrer">
                Twitter</a>
            </Col>
            <Col>
                <a href="https://github.com/bmalbright" 
                target="_blank" 
                rel="noopener noreferrer">
                Github</a>
            </Col>

            <Col>
                <img className="img-responsive" src={logo} alt="logo" />
            </Col>
        </Row>
      </div>  


  )  
}


export default Footer;