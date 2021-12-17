import React, { useState } from "react";
import "../css/App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import email from "../images/email-icon-76.png";

function SendEmail() {
  return (
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
  );
}

export default SendEmail;
