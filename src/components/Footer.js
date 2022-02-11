import React from "react";
import "../assets/css/Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-item">
          <FaFacebook />
        </div>
        <div className="footer-item">
          <FaInstagram />
        </div>
        <div className="footer-item">
          <FaWhatsapp />
        </div>
      </div>
    </>
  );
}

export default Footer;
