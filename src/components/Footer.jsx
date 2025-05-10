import React from 'react';
import { Link } from "react-router-dom"; 
import '../styles/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="mailto:tulitkohuijatuksi@gmail.com">Ota yhteyttä</a>
                    <Link to="/ilmoitus">Ilmoita huijaus</Link>
                    <a href="https://www.instagram.com/tulitkohuijatuksi/"target="_blank">Instagram</a>
                    <a href="https://m.facebook.com/profile.php?id=61576197118855&name=xhp_nt__fb__action__open_user"target="_blank">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;