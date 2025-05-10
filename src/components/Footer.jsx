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
                    <a href="/instagram">Instagram</a>
                    <a href="/facebook">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;