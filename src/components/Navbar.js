import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
    Container, 
  } from 'react-bootstrap';

import "../css/App.css";

import Logo from "../images/ondeck-icon.png";

const AppNavbar = () => {
 
  return (
    <>
      <Navbar expand='lg' className="header">
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
          <img className="img-responsive" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'/>
          <Navbar.Collapse id='navbar'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='about' className='navlink'>
                About Me
              </Nav.Link>
                
                  <Nav.Link as={Link} to='/projects'>
                    Projects
                  </Nav.Link>

                  <Nav.Link as={Link} to='/resume'>
                    Resume
                  </Nav.Link>
  
                  <Nav.Link as={Link} to='/contact'>
                    Contact Me
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default AppNavbar;
