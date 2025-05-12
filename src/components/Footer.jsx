import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../pictures/mail-logo.png";
import igIcon from "../pictures/ig-logo.png";
import fbIcon from "../pictures/facebook.png";
import logo from "../pictures/LOGO.svg";

import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-links">
      <Link to="/ilmoitus" className="ilmoitus-link">
        Ilmoita huijaus
      </Link>

      <div className="social-item">
        <img src={mailIcon} alt="Sähköposti" />
        <a href="mailto:tulitkohuijatuksi@gmail.com">Ota yhteyttä</a>
      </div>

      <div className="social-item">
        <img src={igIcon} alt="Instagram" />
        <a
          href="https://www.instagram.com/tulitkohuijatuksi/"
          target="_blank"
          rel="noreferrer"
        >
          @tulitkohuijatuksi
        </a>
      </div>

      <div className="social-item">
        <img src={fbIcon} alt="Facebook" />
        <a
          href="https://m.facebook.com/profile.php?id=61576197118855&name=xhp_nt__fb__action__open_user"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>
    </div>

    <div className="address-container">
      <p className="address">Otakaari 1</p>
      <p className="address">02150 Espoo</p>
    </div>

    <img src={logo} alt="Tulitko Huijatuksi -logo" className="bottom-logo" />
  </footer>
);

export default Footer;
