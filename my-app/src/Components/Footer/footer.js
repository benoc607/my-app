import React from "react";
import FacebookIcon from './facebook.png';
import InstagramIcon from './instagram.png';
import TwitterIcon from './twitter.png';
import EmailIcon from './email.png';
import PhoneIcon from './phone.png';

const Footer = () => {

  const footItems = [
  <a className="contactLinks" href="https://www.facebook.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={FacebookIcon} className="contactIcons" alt="Facebook" />
  </a>, 
  <a className="contactLinks" href="https://www.instagram.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={InstagramIcon} className="contactIcons" alt="Instagram" />
  </a>, 
  <a className="contactLinks" href="https://www.twitter.com/PLACEHOLDER/" target="_blank" rel="noopener noreferrer">
    <img src={TwitterIcon} className="contactIcons" alt="Twitter" />
  </a>, 
  <a className="contactLinks" href="mailto:PLACEHOLDER@student.swin.edu.au" target="_blank" rel="noopener noreferrer" >
    <img src={EmailIcon} className="contactIcons" alt="Email" />
  </a>,
  <a className="contactLinks" href="tel:+61400111xxx" target="_blank" rel="noopener noreferrer">
    <img src={PhoneIcon} className="contactIcons" alt="Phone" />
  </a>
  ];
  
  const footList = footItems.map((foot,index) => <li key={index}>{foot}</li>);

  return (
    <div className="Footer">
      <h3>Footer</h3>
      <ul>{footList}</ul>
      <p>Copyright&copy; 2023 
        <button id="termsAndCond" onclick="termsAndCond()">Terms & Conditions</button>
        <button id="privacyState" onclick="privacyState()">Privacy Statement</button>
      </p>
    </div>
    );
};

export default Footer;