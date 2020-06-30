import React from "react";
import { Link, Switch, Route } from 'react-router-dom';


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
