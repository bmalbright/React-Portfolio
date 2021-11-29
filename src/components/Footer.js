import React from "react";
import "./css/App.css";
import logo from "./images/icon-76.png";
import twitter from "./images/twitter-icon-76.png";
import linkedin from "./images/linkedin-icon-76.png";
import github from "./images/github-icon-76.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div class="footer">
      <Row>
        <Col>
          <a
            href="https://www.linkedin.com/in/brian-albright-95017533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={linkedin} alt="linkedin" />
          </a>
        </Col>
        <Col>

        </Col>
        <Col>
          <a
            href="https://github.com/bmalbright"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={github} alt="github" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
        <a
            href="https://www.twitter.com/BAlbright01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={twitter} alt="twitter" />
          </a>
        </Col>
        <Col>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-responsive" src={logo} alt="logo" />
        </Col>
        <Col></Col>
        <Col>
          <img className="img-responsive" src={logo} alt="logo" />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
