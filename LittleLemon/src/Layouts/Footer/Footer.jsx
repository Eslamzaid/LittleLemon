import React from "react";
import Linkedin from "./../../assets/Icons/Linkedin.png";
import Github from "./../../assets/Icons/Github.png";
import Twitter from "./../../assets/Icons/Twitter.png";
import LB from "./.../../../../assets/Asset 9@4x.png";
import Send from "./../../assets/Main/Send.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="thegridder">
        <div className="FirstDiv">
          <ul className="SomeSOME">
            <li id="FirstTop">
              <span className="TheTopers">Product</span>
            </li>
            <li className="SomeSpace">Autocapture</li>
            <li className="SomeSpace">Data Governance</li>
            <li className="SomeSpace">Virtual Events</li>
            <li className="SomeSpace">Behavioral Analytics</li>
            <li className="SomeSpace">Connect</li>
          </ul>
        </div>
        <div>
          <ul className="SomeSOME">
            <li id="FirstTop">
              <span className="TheTopers">Explore</span>
            </li>
            <li className="SomeSpace">Resources</li>
            <li className="SomeSpace">Blog</li>
            <li className="SomeSpace">Documents</li>
          </ul>
        </div>
        <div>
          <ul className="SomeSOME">
            <li id="FirstTop">
              <span className="TheTopers">Company</span>
            </li>
            <li className="SomeSpace">About us</li>
            <li className="SomeSpace">Partners</li>
            <li className="SomeSpace">Contact us</li>
          </ul>
        </div>
        <div className="THeLOLO">
          <span className="TheTopers">Subscribe</span>
          <button className="Thhbu">
            <span id="Victory">Email Address</span>{" "}
            <img src={Send} id="THeDeve" alt="Subscribe" />
          </button>
          <p className="TheFinalP">
            Hello, we are ABC. trying to make an effort to put the right people
            for you to get the best results. Just insight
          </p>
        </div>
      </section>
      <section className="theGridder">
        <img id="Soohi" src={LB} alt="Little lemon" />
        <p className="Terms">Terms Privacy Cookies</p>
        <div className="Term2">
          <a
            id="TheonlyHerfs"
            href="https://www.linkedin.com/in/eslamzaid/"
            target="_blank"
          >
            <img
              style={{ cursor: "pointer" }}
              src={Linkedin}
              alt="My Linkedin"
            />
          </a>
          <a
            id="TheonlyHerfs"
            href="https://twitter.com/SrEslamzaid"
            target="_blank"
          >
            <img style={{ cursor: "pointer" }} src={Twitter} alt="My twitter" />
          </a>
          <a
            id="TheonlyHerfs"
            href="https://github.com/Eslamzaid"
            target="_blank"
          >
            <img style={{ cursor: "pointer" }} src={Github} alt="My Linkedin" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
