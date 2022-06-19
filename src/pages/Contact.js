import React from 'react'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import "../css/Contact.css";
import { Form } from 'react-bootstrap'
import linkedin from "../images/linkedin-icon.png";

export default function Contact1() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'ondeck', form.current, 'fHz8eSOe3PWpUmrey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <Form ref={form} onSubmit={sendEmail} className="contactForm">
      {/* <label>Name</label> */}
      <input 
      type="text" 
      name="name" 
      placeholder='Name'
      required/>
      <br/>
      <input 
      type="email" 
      name="email" 
      placeholder='Email Address'
      required/>
      <br/>
      <textarea 
      name="message" 
      placeholder='Message'
      required/>
      <br/>
      <input type="submit" value="Send" />
      <br/>
      <br/>
      <br/>
              <h3>Find me on LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/albright-brian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-responsive" src={linkedin} alt="linkedin" />
              </a>
    </Form>
  );
}