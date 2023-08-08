import React from 'react';
import '../Style/Footer.css'
import logo from '../assets/Logo porfolio.png';
import FooterUpperpart from './FooterUpperpart';
import FooterBottompart from './FooterBottompart';

const Footer = () => {

    return (
        <div>
            <footer>
                <img src={logo} alt="logo" />
                <FooterUpperpart></FooterUpperpart>
                <FooterBottompart></FooterBottompart>
            </footer>
        </div>
    )
}

export default Footer;