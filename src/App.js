import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success")
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success")
        }
    }

    return(
        <>
        <Router>
        <Navbar title="FlipCase" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        
        <div className="container my-3">
            <Routes>
            <Route exact path="/" element={<TextForm heading="Try FlipCase - Enter the text below and Preview it :" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About mode={mode}/>} /> 
            </Routes>
        </div>
        </Router>
        </>
    );
}

export default App;