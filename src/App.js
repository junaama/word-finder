import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import wficon from './wfIcon.png';
function App() {

  return (
    <div className="App">
      <a href="/"><img src={wficon} alt="home icon"></img></a>
     <Header />
    </div>
  );
}

export default App;
