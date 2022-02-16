import React from 'react';
import '../css/App.css';
import { 
 Container,
 Row,
 Col,
 Card } 
from 'react-bootstrap';
import leverage from "../images/project2leveragewo2.png";
import cryptoCosmos from "../images/project1CryptoCosmos.png";
import Scheduler from "../images/scheduler.png";
import TeamProfile from "../images/teamProfile.png";
import FitnessTracker from "../images/fitnessTracker.png";
import BudgetTracker from "../images/budgetTracker.png";
import Jester from "../images/jester.png"

export default function Portfolio() {
  return (
        <div>
          <h1 className="title">Projects</h1>
          <Container>
          <Row>
              <Col>
                <Card className="ProjectCard">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Jester: fun challenge social media app</Card.Title>
                        <Card.Img variant="top" src={Jester} />
                      <Card.Link href="https://jester2.herokuapp.com/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/Jester2.0" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            <Row>
              <Col>
                <Card className="ProjectCard">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Leverage: a workout building app</Card.Title>
                        <Card.Img variant="top" src={leverage} />
                      <Card.Link href="https://leveragewo.herokuapp.com/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/Leverage" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            {/* </Row>

            <Row> */}
              <Col>
                <Card className="ProjectCard">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Crypto Cosmos: a crypto currency information app</Card.Title>
                        <Card.Img variant="top" src={cryptoCosmos} />
                      <Card.Link href="https://cole-cochran.github.io/crypto-cosmos/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/crypto-cosmos" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="ProjectCard1">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Work Day Scheduler: a simple app for planning your day</Card.Title>
                        <Card.Img variant="top" src={Scheduler} />
                      <Card.Link href="https://bmalbright.github.io/homework-5/" target="_blank">View</Card.Link>
                      <Card.Link href="https://bmalbright.github.io/homework-5/" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="ProjectCard1">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Fitness Tracker: an app to track the workouts you've done</Card.Title>
                        <Card.Img variant="top" src={FitnessTracker} />
                      <Card.Link href="https://hw18workouttracker.herokuapp.com" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/homework-18" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="ProjectCard1">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Team Profile Generator: a command line team profile building app</Card.Title>
                        <Card.Img variant="top" src={TeamProfile} />
                      <Card.Link href="https://drive.google.com/file/d/1pmNngfUl6cWOBYLKIT0O58YJ4TmgzaBo/view" target="_blank">Video</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/homework-10" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="ProjectCard1">
                  <Card.Body>
                    <Card.Title className="ProjectTitle">Budget Tracker: an app that tracks your spending and income</Card.Title>
                        <Card.Img variant="top" src={BudgetTracker} />
                      <Card.Link href="https://hw19budgettracker.herokuapp.com/" target="_blank">View</Card.Link>
                      <Card.Link href="https://github.com/bmalbright/homework-19" target="_blank">Repo</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

        </div>
  );
}
