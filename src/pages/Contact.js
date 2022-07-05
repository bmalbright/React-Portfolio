import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';
import "../css/App.css";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import linkedIn from "../images/linkedin-icon.png";
init('REACT_APP_EMAILJS_USER_ID');


export default function Contact({ setAlertContent, setShowAlert }) {


  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData, 
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        setFormData({
          email: '',
          name: '',
          message: ''
        })
        setAlertContent({
          heading: 'Thank you for contacting me.',
          message: 'I will replay to your message as soon as I can.'
        })
        setShowAlert(true)
      }, (error) => {
        setAlertContent({ heading: "Something went wrong.", message: error.text })
      });
  };


  return (
    <div className='contact'>
    <Container>
      <Form className='contactForm'>
        <h1 className='contactMe'> Contact Me </h1>
        <Row>
          <Form.Group controlId='name' className='mb-4'>
          <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder='Name'
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId='email' className="mb-4">
          <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder='Email Address'
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId='message' className="mb-4">
          <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Message'
              onChange={handleChange}
              value={formData.message}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
          <Button
            type='submit'
            variant='primary'
            onClick={e => sendEmail(e)}
            className='contactButton'
          >
            Submit
          </Button>
          </Col>
        </Row>
      </Form>
      <br/>
      <br/>
      <Row className="mediaIcons">
            <Col>
            <h2> Find me on LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/albright-brian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-responsive" src={linkedIn} alt="linkedin" />
              </a>
            </Col>
          </Row>
    </Container>
    </div>
  );
};