import React, { useState } from 'react';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert("Switched to Light Mode", "success");
      document.title="HERO TEXT Light";
    } else {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
      showAlert("Switched to Dark Mode", "success");
      document.title="HERO TEXT Dark";
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <Router>
      <div className={`${darkMode ? ' dark-mode' : ''}`}>
      <Navbar title="HERO" about="ABOUT" darkMode={darkMode} handleDarkMode={handleDarkMode} />

       
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route path="/" element={<Textform heading="WELCOME" />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
