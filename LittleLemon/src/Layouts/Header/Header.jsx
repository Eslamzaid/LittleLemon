import React from "react";
import theLogo from "./../../assets/Logo-removebg-preview.png";
import Menu from "../../RComponenets/Menu/Menu";
import About from "../../RComponenets/About/About";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [responsive, setResponsive] = useState(true);

  const handleOnClick = () => {
    setResponsive(!responsive);
  };

  return (
    <>
      <nav>
        <ul className="desktop-view">
          <li>
            <Link to="/">
              <img width="200rem" src={theLogo} alt="Our restaurant logo" />
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/AboutUs">
              About
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/TheMenu">
              Menu
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/Reservations">
              Reservations
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/Order">
              Order
            </Link>
          </li>
          <li>
            <Link id="TheLinks" to="/Login">
              Login
            </Link>
          </li>
        </ul>
        <div className="MakeItLeft"></div>
        {responsive ? (
          <FontAwesomeIcon
            className="MakeItLeft"
            icon={faXmark}
            onClick={handleOnClick}
          />
        ) : (
          <FontAwesomeIcon
            className="MakeItLeft"
            icon={faBars}
            onClick={handleOnClick}
          />
        )}
        {responsive ? (
          <ul className="phone-view">
            <li id="ThePhoto">
              <Link to="/">
                <img width="200rem" src={theLogo} alt="Our restaurant logo" />
              </Link>
            </li>
            <div className="TheMiniFather">
              <li>
                <Link id="TheLinksPh" className="MakeIt" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link id="TheLinksPh" to="/AboutUs">
                  About
                </Link>
              </li>
              <li>
                <Link id="TheLinksPh" to="/TheMenu">
                  Menu
                </Link>
              </li>
              <li>
                <Link id="TheLinksPh" to="/Reservations">
                  Reservations
                </Link>
              </li>
              <li>
                <Link id="TheLinksPh" to="/Order">
                  Order
                </Link>
              </li>
              <li>
                <Link id="TheLinksPh" to="/Login">
                  Login
                </Link>
              </li>
            </div>
          </ul>
        ) : (
          ""
        )}
      </nav>
      <Routes>
        <Route path="/AboutUs" element={<About />} />
        <Route path="/TheMenu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default Header;
