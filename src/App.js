import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Terminal from './components/Terminal';

import './App.css';
import AboutMe from './pages/AboutMe';
import Demo from './pages/Demo';
import Home from './pages/Home';
import Projects from './pages/Projects';


const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/projects", name: "Projects", component: <Projects /> },
  { path: "/demo", name: "Demo", component: <Demo /> },
  { path: "/about-me", name: "About Me", component: <AboutMe /> },
];

function App() {
  return (
    <Router basename='/andyjou1010'>
      <div className="App">
        <Navbar />
        
        <Terminal routes={routes} />
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;