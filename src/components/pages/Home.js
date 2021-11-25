import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Albright from "../images/Albright.jpg";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body class="profile">
                <Card.Img variant="top" src={Albright} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h3>Full Stack Web Developer</h3>
          </Col>
        </Row>

        <Row>
          <p>
            Brian Albright is a full stack web developer based in Texas. He
            works with Javascript, React, MongoDB, Express, Node, HTML, and CSS.
            Before getting into web development, he spent over 30 years in the
            aquatics industry, working in both aquatic safety and competitive
            swimming. He has extensive experience in management, teaching,
            running events, and operations.
          </p>
        </Row>
      </Container>
    </div>
  );
}
