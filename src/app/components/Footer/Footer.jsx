import React from 'react';
import style from './footer.module.css';
import { Cute_Font } from "next/font/google";

const cuteFont = Cute_Font({
  subsets: ["latin"],
  weight: ['400']
});

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style['footer-wrapper']}>
                    <p>&copy;2025</p>
                    <div className={`${cuteFont.className} ${style.logo}`}>Lux<span>Rental</span></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
