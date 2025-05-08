
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
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
          {location.pathname === "/" ? (
            <a href="#top" onClick={closeMenu}>Etusivu</a>
                  ) : (
                    <Link to="/" onClick={closeMenu}>Etusivu</Link>
                  )}
            <Link to="/peli" onClick={closeMenu}>Hujausviestin tunnistuspeli</Link>
            <a href="#tunnista-huijaus" onClick={closeMenu}>Näin tunnistat hujausviestin</a>
            <a href="#tarinat" onClick={closeMenu}>Tarinat</a>

          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;