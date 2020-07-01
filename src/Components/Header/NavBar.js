import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/home" >Home</Link>{" "}
        <Link to="/rel_syn" >Synonym</Link>{" "}
        <Link to="/rel_ant" >Antonym</Link>{" "}
        <Link to="/ml" >Similar Meaning</Link>{" "}
        <Link to="/rel_rhy" >Rhyme</Link>{" "}
        <Link to="/rel_hom" >Homophone</Link>
      </nav>
    </div>
  );
};
export default NavBar;
