import Navbar from './components/Navbar';
// import logo from './logo.svg';
// import './App.css';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// let name = 'Akshat';
// import Scrollspy from './components/Scrollspy';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setalert] = useState(null);

    const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setalert(null);
      }, 3000);
    }
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#121212'
        showAlert("Dark mode has been enabled", "Success");
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Dark mode has been disabled","Success");
      }
    }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} aboutText = "About us" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text here" mode={mode} toggleMode={toggleMode}/>}></Route>
        </Routes>
      </div>
    </Router>


      {/* <About/> */}
      {/* <Scrollspy/> */}
    </>
  );
}

export default App;
