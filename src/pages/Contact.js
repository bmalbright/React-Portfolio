import React from 'react';
import {
 // Jumbotron,
    Container,
    Row, 
    Col,
} from 'react-bootstrap';

import email from "../images/email-icon-76.png";

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
            </Col>
          </Row>
        </div>
        <div className="emailInfo">
          <Row>
            <Col>
              <text>Click the icon to email Brian at:</text>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>brian@ondeckconsulting.net</text>
            </Col>
          </Row>
        </div>
        <div className="phoneInfo">
          <Row>
            <Col>
              <text>Call Brian:</text>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>512-658-6799</text>
            </Col>
          </Row>
        </div>
      </div>
      </Container>
    );
  }
  
  export default SendEmail;