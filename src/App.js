import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import AboutMe from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import "./css/App.css";


function App() {
  return (
      <Router>
        <div className='portfolio'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
