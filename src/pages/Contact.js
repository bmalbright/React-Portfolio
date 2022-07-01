import React from 'react'
import {useRef} from 'react'
import * as emailjs from 'emailjs-com'
import "../css/Contact.css";
import { Form } from 'react-bootstrap'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'ondeck', form.current, 'fHz8eSOe3PWpUmrey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={Contact}>

      <input 
      type="text" 
      name="name" 
      className='name'
      placeholder='Name'
      required/>
      <br/>
      <input 
      type="email" 
      name="email" 
      className='email'
      placeholder='Email Address'
      required/>
      <br/>
      <textarea 
      name="message" 
      className='message'
      placeholder='Message'
      required/>
      <br/>
      <input type="submit" value="Send" />
    </Form>
  );
}