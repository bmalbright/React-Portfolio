import React from "react";
import {
  // Jumbotron,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import email from "../images/email-icon.png";
import phone from "../images/phone-icon.png";
import twitter from "../images/twitter-icon.png";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/github-icon.png";

import "../css/App.css";

function SendEmail() {
  return (
    <Container>
      <div className="contact">
        <div className="clickToEmail">
          <Row>
            <Col>
              <a href="mailto:brian@ondeckconsulting.net">
                <img className="img-responsive" src={email} alt="email" />
              </a>
              <p>brian@ondeckconsulting.net</p>
            </Col>
          </Row>
        </div>

        <div className="phoneInfo">
          <Row>
            <Col>
              <a href="tel:5126586799">
                <img className="img-responsive" src={phone} alt="phone" />
              </a>
              <p>512-658-6799</p>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row className="mediaIcons">
            <Col>
              <a
                href="https://www.linkedin.com/in/albright-brian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-responsive" src={linkedin} alt="linkedin" />
              </a>
            </Col>
          </Row>
          <Row className="mediaIcons">
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
          <Row className="mediaIcons">
            <Col>
              <a
                href="https://www.twitter.com/BAlbright01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-responsive" src={twitter} alt="twitter" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default SendEmail;



//  ******************
// This is the original code with the form included. 
// ********************

