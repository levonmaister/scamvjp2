
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToTop =() => {
      if (location.pathname==="/"){
        window.scrollTo({top: 0, behavior: "smooth"});
        closeMenu();
      } else {
        navigate("/", {state:{section:"top"}});
        closeMenu();
      }
    };

    const scrollToSection = (sectionID) => {
      if (location.pathname !== "/") {
        navigate("/", {state: {section: sectionID}});
      } else {
        document.getElementById(sectionID)?.scrollIntoView({behavior: "smooth"});
      }
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
                <button onClick={scrollToTop} className="link-button">Etusivu</button>
              
                <Link to="/peli" onClick={closeMenu}className="link-button">Huijausviestin tunnistuspeli</Link>
              
                <button onClick={()=> {
                  scrollToSection("checklist-title");
                  closeMenu();
                  }}className="link-button">Näin tunnistat hujausviestin</button>
              
                <button onClick={()=>{
                  scrollToSection("tarinat");
                  closeMenu();
                  }}className="link-button">Tarinat</button>
           </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;