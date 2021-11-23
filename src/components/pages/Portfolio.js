import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import leverage from "../images/project2leveragewo2.png"
import cryptoCosmos from "../images/project1CryptoCosmos.png"

export default function Portfolio() {
  return (
        <div>
          <h1>Portfolio</h1>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={leverage} />
                      <Card.Link href="https://leveragewo.herokuapp.com/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/Leverage">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Crypto Cosmos: a crypto currency </Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/">View Project</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos">View Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

        </div>
  );
}
