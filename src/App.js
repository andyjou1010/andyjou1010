import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Terminal from './components/Terminal';

import Projects from './pages/Projects';
import Demo from './pages/Demo';
import AboutMe from './pages/AboutMe';

const routes = [
  { path: "/", name: "Home" }, 
  { path: "/projects", name: "Projects", component: <Projects /> },
  { path: "/demo", name: "Demo", component: <Demo /> },
  { path: "/about-me", name: "About Me", component: <AboutMe /> },
];

function App() {
  return (
    <Router>
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