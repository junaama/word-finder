import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import wficon from './wfIcon.png';
function App() {
  
  return (
    <div className="App">
      <img src={wficon} alt="home icon"></img>
     <Header />
    </div>
  );
}

export default App;
