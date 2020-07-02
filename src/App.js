import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import wficon from './wfIcon.png';
import wfSmall from './wficon-small.png';
function App() {

  return (
    <>
    <div className="App">
      <a href="/"><img src={wficon} alt="home icon"></img></a>
     <Header />
    </div>
    <Footer wfSmall={wfSmall}/>
    </>
  );
}

export default App;
