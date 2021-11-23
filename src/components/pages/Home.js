import React from 'react';
import logo from "../images/icon-180.png"

export default function Home() {
  return (
    <div>
      <img className="img-responsive" src={logo} alt="logo"/>
      <h1>Brian Albright</h1>
      
      <p>
        Brian Albright is a full stack web developer based in Texas.  
        He works with Javascript, React, MongoDB, Express, Node, HTML, and CSS.
        Before getting into web development, he spent over 30 years in 
        the aquatics industry, working in both aquatic safety and 
        competitive swimming. He has extensive experience in management, 
        teaching, running events, and operations. 
      </p>
    </div>
  );
}
