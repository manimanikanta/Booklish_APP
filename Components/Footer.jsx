import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
      <section className="footer">
        <Link to="/" className="link main-logo">
          <img src={logo} className="logo" />
          <h6>Booklish</h6>
        </Link>
        <ul className="footer-links">
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <Link className="icon">
            <FaInstagram />
          </Link>
          <Link className="icon">
            <FaPinterest />
          </Link>
          <Link className="icon">
            <FaTelegram />
          </Link>
          <Link className="icon">
            <FaWhatsapp />
          </Link>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2023 - All Rights Reserved.</p>
        </div>
      </section>
    );
}

export default Footer