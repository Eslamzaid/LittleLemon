import React from "react";
import theLogo from './../../assets/Logo-removebg-preview.png'
import About from "../../RComponenets/About/About";
import {Router, Routes,Link} from 'react-router-dom'

const Header = () => {

  return (
    <>
    <nav>
        <ul>
            <li><Link to="/"><img src={theLogo} alt="Our restaurant logo"/></Link></li>
            <li><Link to="/AboutUs">About</Link></li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order</li>
            <li>Login</li>
        </ul>
    </nav>
    </>
  );
};

export default Header;
