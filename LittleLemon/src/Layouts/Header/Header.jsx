import React, { useContext } from "react";
import theLogo from "./../../assets/Logo-removebg-preview.png";
import { useState } from "react";
import { Routes, Route, NavLink, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { theMainCon } from "../Layouts";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleOnClick = () => {
    setResponsive(!responsive);
  };

  const thePrepi = useContext(theMainCon);

  const THePP = thePrepi;

  return (
    <>
      <nav className={navBar ? "active" : "navtransition: 0.5s;"}>
        <ul className="desktop-view">
          <div>
            <li>
                <img width="200rem" src={theLogo} alt="Our restaurant logo" />
            </li>
          </div>
          <div className="TheNavLinksFather">
            <li id="TheLinks" onClick={thePrepi.eight}>
              Home
            </li>
            <li id="TheLinks" onClick={thePrepi.two}>
              Order
            </li>
            <li id="TheLinks" onClick={thePrepi.four}>
              Book a table
            </li>
            <li id="TheLinks" onClick={thePrepi.ten}>
              Contact us
            </li>
          </div>
        </ul>
        <div className="TheMegaP">
          <div className="TheParents">
            <NavLink to="/">
              <img
                id="ThePhoto"
                width="200rem"
                src={theLogo}
                alt="Our restaurant logo"
              />
            </NavLink>
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
          </div>
          {responsive ? (
            <ul className="phone-view">
              <div className="TheMiniFather">
                <li>
                  <NavLink id="TheLinksPh" className="MakeIt" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/AboutUs">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/Reservations">
                    Reservations
                  </NavLink>
                </li>
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
      {/* <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/AboutUs" element={<About />} />
      </Routes> */}
    </>
  );
};

export default Header;
