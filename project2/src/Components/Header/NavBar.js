import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
// import Synonym from '../Synonym/Synonym';
// import Antonym from '../Antonym/Antonym';
// import MeansLike from '../MeansLike/MeansLike';
// import Homophone from '../Homophone/Homophone';
// import Rhyme from '../Rhyme/Rhyme';
// import { Nav, NavItem, Link } from "reactstrap";
// import 'nav.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/home" >Home</Link>{" "}
        <Link to="/synonym" >Synonym</Link>{" "}
        <Link to="/antonym" >Antonym</Link>{" "}
        <Link to="/meanslike" >Similar Meaning</Link>{" "}
        <Link to="/rhyme" >Rhyme</Link>{" "}
        <Link to="/homophone" >Homophone</Link>
      </nav>
      {/* <main>
            In Main
            <Switch>
                <Route path='/' />
                <Route path='/synonym' component={Synonym}/>
                <Route path='/antonym' component={Antonym}/>
                <Route path='/meanslike' component={MeansLike}/>
                <Route path='/homophone' component={Homophone}/>
                <Route path='/rhyme' component={Rhyme}/>
            </Switch>
        </main> */}
    </div>
  );
};
export default NavBar;
