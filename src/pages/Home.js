import React from 'react'
import "../css/Home.css";
import  { Container } from 'react-bootstrap';

export default function Home() {
  return (
<Container>
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
{/* text div container */}
<div class="content">
  <h1>Welcome to my portfolio</h1>
</div>
{/* end of text  */}
</Container>
  )
}