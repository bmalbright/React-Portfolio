import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../css/App.css";

import HTML from "../images/TechIcons/html.png";
import Javascript from "../images/TechIcons/javascript.png";
import CSS from "../images/TechIcons/css.png";
import ReactIcon from "../images/TechIcons/react.png";
import Node from "../images/TechIcons/node.png";
import MongoDB from "../images/TechIcons/mongodb1.png";
import GraphQL from "../images/TechIcons/graphql.png";
import MySQL from "../images/TechIcons/mysql.png";
import JQuery from "../images/TechIcons/jquery.png";
import Bootstrap from "../images/TechIcons/bootstrap.png";
import Handlebars from "../images/TechIcons/handlebars.png";
import JSON from "../images/TechIcons/json.png";

export default function Resume() {
  return (
    <div className="resume">
      <Container>
        <Row>
          <Col>
            <div className="techIcon">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img className="img-responsive" src={HTML} alt="react icon" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={Javascript}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={CSS}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>

        </Row>

        <Row>
        <Col>
            <div className="techIcon">
              <a href="https://reactjs.org/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img className="img-responsive" src={ReactIcon} alt="react icon" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://nodejs.org/en/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={Node}
                  alt="react icon"
                />
              </a>
            </div>
            
          </Col>
          <Col>
          <div className="techIcon">
              <a href="https://jquery.com/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={JQuery}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>

        </Row>


        <Row>
        <Col>
          <div className="buttonBorder">
            <a
              href="https://docs.google.com/document/d/1bIePAKEDjqNSyCack9ZmcJy_sbAqZW13g80xQq4kGuk/edit?usp=sharing"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <button className="button">Click here for my resume</button>
            </a>
          </div>
        </Col>
        </Row>

        <Row>
          <Col>
            <div className="techIcon">
              <a href="https://www.mongodb.com/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={MongoDB}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://graphql.org/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={GraphQL}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>

          <Col>
            <div className="techIcon">
              <a href="https://www.mysql.com/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img
                  className="img-responsive"
                  src={MySQL}
                  alt="react icon"
                />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="techIcon">
              <a href="https://getbootstrap.com/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img className="img-responsive" src={Bootstrap} alt="react icon" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://www.json.org/json-en.html"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img className="img-responsive" src={JSON} alt="react icon" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="techIcon">
              <a href="https://handlebarsjs.com/"
                            target="_blank"
                            rel=" noopener noreferrer"
              >
                <img className="img-responsive" src={Handlebars} alt="react icon" />
              </a>
            </div>
          </Col>


        </Row>
      </Container>
    </div>
  );
}
