import React from "react";

import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="http://facebook.com"><FaFacebookF /></a>
                <a href="http://instagram.com"><FiInstagram /></a>
                <a href="http://twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Fatema Tuz Zohora. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;