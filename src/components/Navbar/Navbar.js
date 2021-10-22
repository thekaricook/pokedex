import React from 'react';
import logo from '../../img/pokeapi_logo.png';
import './style.css';

function Navbar() {
    return (
        <div className="logo-container">
            <img src={logo} alt="" className="poke-logo" />
        </div>
    );
}

export default Navbar;