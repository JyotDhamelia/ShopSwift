import React from "react";
import { FiHeart } from "react-icons/fi";
import '../css/footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="modern-footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="footer-text mb-0">
                                © {currentYear} <span className="brand-gradient">Shop-Swift</span> - All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="footer-text mb-0">
                                Made with <FiHeart className="heart-icon" /> by Jyot Dhamelia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
