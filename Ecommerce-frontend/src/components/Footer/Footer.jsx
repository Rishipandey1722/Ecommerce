import React from 'react';
import './Footer.css'; // Import your custom CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="footer-title">Footer</h1>
        <p className="footer-text">&copy; Copyright All right reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
