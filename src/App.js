import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Homepage';
import Creatememe from './pages/Creatememes';
import Display from './pages/Displaymeme';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Creatememe />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
