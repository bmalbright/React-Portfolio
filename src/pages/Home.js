import React from 'react'
import "../css/Home.css";
import  { Container } from 'react-bootstrap';

export default function Home() {
  return (
<Container>
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
{/* text div container */}
<div className="content">
  <h1>Welcome to Brian's portfolio</h1>
</div>
{/* end of text  */}
</Container>
  )
}