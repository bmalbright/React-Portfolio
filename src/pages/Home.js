import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "../css/App.css";

import Biopic from "../images/biopic.jpg";
import Fiona from "../images/fiona.jpg";

export default function Home() {
  return (
    <div className="home">
      <Row>
        <Col className="profile">
          <Card className="biopic">
            <img className="img-responsive" src={Biopic} alt="Biopic" />
          </Card>
        </Col>
      </Row>

      <div>
        <Row>
          <Col>
            <Card className="bio">
              <h1 className="intro"> Hi, I'm Brian</h1>
              <p className="paragraph">
                I am a full stack web developer with a management background
                looking to build a more intuitive experience for the user. As
                recent graduate earning a certificate in Full Stack Web
                Development from the University of Texas at Austin, I developed
                skills using HTML, CSS, Javascript, React, MySQL, MongoDB, Node,
                and Express.
              </p>
              <p className="paragraph">
                My previous background in management gives me a unique
                perspective on the user experience. Not only do I consider how
                the project is being realized in the present, but also what
                future development can be added to make the experience better.
              </p>

              <p className="paragraph">My recent projects have included:</p>
              <ul className="paragraph">
                <li>
                  A social media app that gives the user a task or challenge,
                  which they complete by taking and uploading a pic
                </li>
                <li>
                  A workout app that allows users to create and schedule their
                  workouts
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bio">
              <p className="paragraph">
                I am excited to use my knowledge and experience to work on a
                team building better experiences on the web - whether the user
                accesses them on mobile devices or at their desk.
              </p>
              <p className="paragraph">
                When not at my computer, I can be found at the park walking my
                dog, Fiona.
              </p>
            </Card>
          </Col>
          <Col>
            <Card className="fiona">
              <img className="img-fluid" src={Fiona} alt="Fiona" />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
}
