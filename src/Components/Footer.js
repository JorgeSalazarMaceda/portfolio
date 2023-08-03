import React from 'react';
import '../Style/Footer.css'
import logo from '../assets/Logo porfolio.png';

const Footer = () => {

    return (
        <div>
            <footer>
                <img src={logo} alt="logo" />
                <div className='top'>
                    <h2>Contactos</h2>
                </div>

                <span> © 2023 All rights reserved</span>
            </footer>
        </div>
    )
}

export default Footer;