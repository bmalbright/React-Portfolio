import React from 'react';
import {

  Col,
  Row,
  Card,

} from 'react-bootstrap';

import Logo from "../images/ondeck-icon-180.png";

import "../css/App.css";

export default function Home() {
  return (
    <div className="home">

        
        {/* <Row>
      
          <Col className="profile">

          <img className="img-responsive" src={Logo} alt="logo" />

          </Col>
        
        </Row> */}
       
        <div>

        
        <Row>
          <Col>
          <Card className="paragraph">
            <p >
            I am a full stack web developer with a management background 
            looking to build a more intuitive experience for the user. A recent graduate 
            earning a certificate in full stack web development from the University of 
            Texas at Austin where I developed skills using HTML, CSS, Javascript, React, 
            MySQL, MongoDB, Node, and Express. Not only do I consider how the project is 
            being realized in the present, but also what future development can be added 
            to make the experience better. I recently worked on projects to build a workout 
            app to let users create and schedule their workouts, and to build a social 
            media app that gives users a task or challenge, which they complete by taking 
            and uploading a picture of. I am excited to use my knowledge and experience to work 
            on a team building better experiences on the web, whether the user accesses them 
            on mobile devices or at their desk.  When not at my computer, I can be found at 
            the park walking my dog, Fiona.
            </p>
            </Card>
          </Col>
        </Row>
        </div>
        {/* <Row>
          <Col>
            <h3 className="title">Full Stack Web Developer</h3>
            <Row>
              <Col>
                <ul>
                  <li>Javascript</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>jQuery</li>
                  <li>MySQL</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>React</li>
                  <li>HTML</li>
                  <li>Node</li>
                  <li>Bootstrap</li>
                  <li>GraphQL</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row> */}

    </div>
  );
}
