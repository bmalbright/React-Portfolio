import React from "react";
import "../css/App.css";
import Col from "react-bootstrap/Col";

export default function Blog() {
  return (
    <div className="resume">
      <Col>
      <div className="buttonBorder">
        <a href="https://docs.google.com/document/d/1uoeOo8BgYKWQBJQgVuNGTcp6-zfbpPZu6XKrbIvy2jk/edit?usp=sharing">
          <button className="button">Click here for my resume</button>
        </a>
        </div>
      </Col>
    </div>
  );
}
