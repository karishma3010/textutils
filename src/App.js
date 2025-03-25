import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 5000);
  };

  const removeBodyColor=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }

  const toggleMode = (cls) => {
    removeBodyColor();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "Success");
      document.title = "Text Utilities - Light Mode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#0d074c";
      showalert("Dark mode has been enabled", "Success");
      document.title = "Text Utilities - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Utilities" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/Textform"
              element={<Textform heading="Try textutils: Word counter,Character counter, Remove extra spaces" mode={mode} showalert={showalert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;