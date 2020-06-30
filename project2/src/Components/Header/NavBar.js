import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import 'nav.css';

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/" href="/">Home</NavLink>
        <NavLink to="/synonym" href="/synonym">Synonym</NavLink>
        <NavLink to="/antonym" href="/antonym">Antonym</NavLink>{" "}
        <NavLink to="/definition" href="/meanslike">Similar Meaning</NavLink> 
        <NavLink to="/rhyme" href="/rhyme">Rhyme</NavLink>
        <NavLink to="/homophone" href="/homophone">Homophone</NavLink>
      </Nav>
    </div>
  );
};
export default NavBar;
