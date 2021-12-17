import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Albright from "../images/Albright.jpg";
import Logo from "../images/ondeck-icon-180.png";

export default function Home() {
  return (
    <div className="home">
      <Container>
        
        <Row>
        <>
          <Col className="profile">
            <Card >
              <Card.Body>
                <Card.Img variant="top" src={Logo} />
              </Card.Body>
            </Card>
          </Col>
          </>
        </Row>
       
        <div>

        
        <Row>
          <Col>
            <p className="paragraph">
              Brian Albright is a full stack web developer based in Texas.
              Before getting into web development, he spent over 30 years in the
              aquatics industry, working in both aquatic safety and competitive
              swimming. He has extensive experience in management, teaching,
              running events, and operations. When not at his computer, he can
              be found at the park walking his dogs.
            </p>
          </Col>
        </Row>
        </div>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
}
