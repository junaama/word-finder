import React from 'react';
import NavBar from './NavBar.js'
import { Link, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
const Header = () => {

    return (
        <div>
            <NavBar />
            <Main />
        </div>
        

    )
}
export default Header;