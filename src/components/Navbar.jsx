
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    let burgerIconClass = "burger";
    if (menuOpen) {
      burgerIconClass += " open";
    }
    let navLinksClass = "nav-links";
    if (menuOpen) {
      navLinksClass += " active";
    }
  
    return (
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="logo">
            <Link to="/ilmoitus" onClick={closeMenu}>Ilmoita huijaus tästä</Link>
          </div>
  
          <div className={burgerIconClass} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
  
          <div className={navLinksClass}>
            <Link to="/" onClick={closeMenu}>Etusivu</Link>
            <div onClick={closeMenu}>Hujausviestin tunnistuspeli</div>
            <div onClick={closeMenu}>Näin tunnistat hujausviestin</div>
            <div onClick={closeMenu}>Tarinat</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;