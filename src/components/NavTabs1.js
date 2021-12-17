// import React from "react";
// import logo from "./images/icon-76.png";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./css/App.css";

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <div>
//       <div className="header">
//         <Row>
//           <Col>
//             <img className="img-responsive" src={logo} alt="logo" />
//           </Col>
//           <Col>
//             <h1>Brian Albright</h1>
//           </Col>
//           <Col>
//             <img className="img-responsive" src={logo} alt="logo" />
//           </Col>
//         </Row>
//       </div>
//       <div className="nav">
//         <ul className="nav nav-tabs">
//           <li className="nav-item">
//             <a
//               href="#home"
//               onClick={() => handlePageChange("Home")}
//               // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//               // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//               className={
//                 currentPage === "Home" ? "nav-link active" : "nav-link"
//               }
//             >
//               About Me
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#portfolio"
//               onClick={() => handlePageChange("Portfolio")}
//               // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//               className={
//                 currentPage === "Portfolio" ? "nav-link active" : "nav-link"
//               }
//             >
//               Portfolio
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#resume"
//               onClick={() => handlePageChange("Resume")}
//               // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//               className={
//                 currentPage === "Resume" ? "nav-link active" : "nav-link"
//               }
//             >
//               Resume
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#contact"
//               onClick={() => handlePageChange("Contact")}
//               // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//               className={
//                 currentPage === "Contact" ? "nav-link active" : "nav-link"
//               }
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default NavTabs;





// This is the code I modified. It worked until I broke it. 

// import React from "react";
// import { Link } from "react-dom";
// import logo from "./images/ondeck-icon.png";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "./css/App.css";

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs() {
//   return (

//       <Navbar className="nav">
//         <Container fluid>
//         {/* <Navbar.Brand as={Link} to="/pages/home">
//             <a src={logo}></a>
//           </Navbar.Brand> */}
//           <Navbar.Brand as={Link} to="/pages/home">
//             Brian Albright
//           </Navbar.Brand>
//           <Navbar.Toggle aria controls="navbar" />
//           <Navbar.Collapse id="navbar">
//             <Nav className="ml-auto">
//                 <Nav.Link as={Link}to='/pages/home'>
//                     About Me
//                 </Nav.Link>
//                 <Nav.Link as={Link}to='/pages/portfolio'>
//                     Portfolio
//                 </Nav.Link>
//                 <Nav.Link as={Link}to='/pages/resume'>
//                     Resume
//                 </Nav.Link>
//                 <Nav.Link as={Link}to='/pages/contact'>
//                     Contact
//                 </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   );
// }

// export default NavTabs;