import React from 'react';
import './FooterStyles.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
   <footer>

<section id='contact'>
       

   <img src={Logo} alt='me' className='footer__logo' width={80}/>
   
   <ul className='permalinks'>
    <li><a href='#home'>Hjem</a></li>
    <li><a href='#services'>Tjenester</a></li>
    <li><a href='#about'>Om</a></li>
    <li><a href='#contact'>Kontakt</a></li>
    
   </ul>

   <div className="footer__socials">
    <a href="https://facebook.com"><FaFacebookF/></a>
    <a href="https://instagram.com"><AiOutlineInstagram/></a>
    <a href="https://twitter.com"><AiFillLinkedin/></a>
   </div>
   <div className="footer__copyright"> 
    <small>  Phillips Karriere &copy; All rights reserved</small>
   </div>

   </section>
   </footer>
  )
}

export default Footer;