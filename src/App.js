import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alerts from './components/Alerts';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(52, 52, 52)';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextArena - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextArena - Light Mode';
    }
  }

  return (
    // JSX
    <>
      {/* <Router> */}
        <Navbar title="TextArena" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        {/* <Routes> */}
          {/* <Route exact path='/about' element={<About mode={mode} />}></Route>
          <Route exact path='/' element={<Form showAlert={showAlert} heading="Enter your Text" mode={mode} />}></Route> */}
          <Form showAlert={showAlert} heading="Enter your Text" mode={mode} />
          <About mode={mode} />
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;