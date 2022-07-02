import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';
import "../css/Contact.css";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
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
    <Container className='p-4 border border-dark rounded'>
      <Form>
        <h1> Contact Me </h1>
        <Row>
          <Form.Group controlId='name'>
            <Form.Control
              type="text"
              placeholder='Name'
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId='email'>
            <Form.Control
              type="email"
              placeholder='Email Address'
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId='message'>
            <Form.Control
              as='textarea'
              placeholder='Message'
              onChange={handleChange}
              value={formData.message}
            />
          </Form.Group>
        </Row>
        <Row>
          <Button
            type='submit'
            onClick={e => sendEmail(e)}
          >
            Submit
          </Button>
        </Row>



      </Form>
    </Container>
  );
};