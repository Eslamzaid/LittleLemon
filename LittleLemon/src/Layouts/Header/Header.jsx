import React from "react";
import theLogo from "./../../assets/Logo-removebg-preview.png";
import Menu from "../../RComponenets/Menu/Menu";
import About from "../../RComponenets/About/About";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

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

  return (
    <>
      <nav className={navBar ? "active" : "navtransition: 0.5s;"}>
        <ul className="desktop-view">
          <div>
            <li>
              <NavLink to="/">
                <img width="200rem" src={theLogo} alt="Our restaurant logo" />
              </NavLink>
            </li>
          </div>
          <div className="TheNavLinksFather">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/AboutUs"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/TheMenu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/Reservations"
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/Order"
              >
                Order
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
                id="TheLinks"
                to="/Login"
              >
                Login
              </NavLink>
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
                  <NavLink id="TheLinksPh" className="MakeIt" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/AboutUs">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/TheMenu">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/Reservations">
                    Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/Order">
                    Order
                  </NavLink>
                </li>
                <li>
                  <NavLink id="TheLinksPh" to="/Login">
                    Login
                  </NavLink>
                </li>
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/AboutUs" element={<About />} />
        <Route path="/TheMenu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default Header;
