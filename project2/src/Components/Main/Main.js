import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Synonym from '../Synonym/Synonym';
import Antonym from '../Antonym/Antonym';
import MeansLike from '../MeansLike/MeansLike';
import Homophone from '../Homophone/Homophone';
import Rhyme from '../Rhyme/Rhyme';
import Home from '../Home/Home';
const Main = () => {

    return (
        <main>
            <Switch>
                <Route exact path='/home' exact component={Home}/>
                <Route path='/synonym' component={Synonym}/>
                <Route path='/antonym' component={Antonym}/>
                <Route path='/meanslike' component={MeansLike}/>
                <Route path='/homophone' component={Homophone}/>
                <Route path='/rhyme' component={Rhyme}/>
            </Switch>
        </main>
    )
}
export default Main;