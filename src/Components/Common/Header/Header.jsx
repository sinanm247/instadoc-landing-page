import React, { useEffect, useState } from 'react'
import "./Header.scss"
import logoWhite from "../../../assets/Logo/InstaDoc-Logo.png"
import { useLocation } from 'react-router-dom'
import service247Icon from "../../../assets/Icons/service24-icon.png"
import whatsappIcon from "../../../assets/Common/whatsapp.svg"
import { FaWhatsapp } from 'react-icons/fa'

export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(location.pathname === "/thank-you" || location.pathname !== "/") {
                setIsSticky(true)
            } else if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""}`}>
                <div className="logo-div">
                    <a href="/" className="logo-link">
                        <img src={logoWhite} alt="City Doctor Logo" className="logo" />
                    </a>
                </div>

                <div className="call-div-right">
                    <a href="tel:+971551548684" className="service-button-link" target="_blank" rel="noopener noreferrer"> 
                        <div className="service-button">
                            <img src={service247Icon} alt="24/7 Services" className="service-icon" />
                        </div>
                    </a>
                    <a href="https://wa.me/971987654321" target="_blank" rel="noopener noreferrer"> 
                        <div className="whatsapp-button">
                            <FaWhatsapp className="whatsapp-icon-btn" />
                            <span className="whatsapp-number">+971 55 154 8684</span>
                        </div>
                    </a>
                </div>

            </div>
        </nav>
    )
}