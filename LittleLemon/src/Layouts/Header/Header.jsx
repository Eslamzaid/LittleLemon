import React from "react";
import theLogo from './../../assets/Logo-removebg-preview.png'
import {Router, Routes,Link} from 'react-router-dom'

const Header = () => {

  return (
    <>
    <nav>
        <ul>
            <li><img src={theLogo} alt="Our restaurant logo"/></li>
            <li>About</li>
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
