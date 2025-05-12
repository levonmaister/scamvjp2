import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../pictures/mail-logo.png";
import igIcon from "../pictures/ig-logo.png";
import fbIcon from "../pictures/facebook.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bottom-fill" id="contact">
      <div className="socials-logo-text">
        <Link to="/ilmoitus" className="ilmoitus-link">
          Ilmoita huijaus
        </Link>

        <img src={mailIcon} alt="Sähköposti" />
        <a href="mailto:tulitkohuijatuksi@gmail.com">Ota yhteyttä</a>

        <img src={igIcon} alt="Instagram" />
        <a
          href="https://www.instagram.com/tulitkohuijatuksi/"
          target="_blank"
          rel="noreferrer"
        >
          @tulitkohuijatuksi
        </a>

        <img src={fbIcon} alt="Facebook" />
        <a
          href="https://m.facebook.com/profile.php?id=61576197118855&name=xhp_nt__fb__action__open_user"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
