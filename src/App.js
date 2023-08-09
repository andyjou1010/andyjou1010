import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Demo from './pages/Demo';
import AboutMe from './pages/AboutMe';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/demo" component={Demo} />
          <Route path="/about-me" component={AboutMe} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
