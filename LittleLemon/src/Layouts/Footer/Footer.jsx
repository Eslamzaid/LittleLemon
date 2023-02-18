import React from "react";
import "./Footer.css";
import Send from "./../../assets/Main/Send.png";

const Footer = () => {
  return (
    <footer>
      <section className="thegridder">
        <div className="FirstDiv">
          <ul>
            <li>
              <span className="TheTopers">Product</span>
            </li>
            <li>Autocapture</li>
            <li>Data Governance</li>
            <li>Virtual Events</li>
            <li>Behavioral Analytics</li>
            <li>Connect</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span className="TheTopers">Explore</span>
            </li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Documents</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span className="TheTopers">Company</span>
            </li>
            <li>About us</li>
            <li>Partners</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <span className="TheTopers">Subscribe</span>
          <button>
            Email Address <img src={Send} alt="Subscribe" />
          </button>
          <p>
            Hello, we are ABC. trying to make an effort to put the right people
            for you to get the best results. Just insight
          </p>
        </div>
        <div>
          <ul>
            <li>
              <span className="TheTopers">Careers</span>
            </li>
            <li>Autocapture</li>
            <li>Data Governance</li>
            <li>Virtual Events</li>
            <li>Virtual Users </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span className="TheTopers">Internships</span>
            </li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Documents </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span className="TheTopers">About us</span>
            </li>
            <li>Partners</li>
            <li>Customers</li>
            <li>Contact us</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
