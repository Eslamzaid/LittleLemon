import React, { useContext } from "react";
import theLogo from "./../../assets/Logo-removebg-preview.png";
import { useState } from "react";
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

  return (
    <>
      <nav className={navBar ? "active" : ""}>
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
            <img
              id="ThePhoto"
              width="200rem"
              src={theLogo}
              alt="Our restaurant logo"
            />
            {responsive ? (
              <FontAwesomeIcon className="fa-2xl" icon={faXmark} onClick={handleOnClick} />
            ) : (
              <FontAwesomeIcon className="fa-2xl" icon={faBars} onClick={handleOnClick} />
            )}
          </div>
          {responsive ? (
            <ul className="phone-view">
              <div className="TheMiniFather">
                <li id="TheLinksPh" onClick={thePrepi.eight}>
                  <span onClick={() => setResponsive(() => !responsive)}>
                    Home
                  </span>
                </li>
                <li id="TheLinksPh" onClick={thePrepi.two}>
                  <span onClick={() => setResponsive(() => !responsive)}>
                    Order
                  </span>
                </li>
                <li id="TheLinksPh" onClick={thePrepi.four}>
                  <span onClick={() => setResponsive(() => !responsive)}>
                    Book a table
                  </span>
                </li>
                <li id="TheLinksPh" onClick={thePrepi.ten}>
                  <span onClick={() => setResponsive(() => !responsive)}>
                    Contact us
                  </span>
                </li>
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
