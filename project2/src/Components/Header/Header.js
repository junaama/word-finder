import React from 'react';
import NavBar from './NavBar.js'
import { Link, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
const Header = () => {

    return (
        <div>
            <NavBar />
            <main>
                <Main />
            </main>
        </div>
        

    )
}
export default Header;