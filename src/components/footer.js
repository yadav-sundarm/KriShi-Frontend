import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2025 Krishi-Reboot</p>
      </div>
      <div className="footer-right">
        <p>
          Developed by <strong>Sundarm Yadav</strong>
        </p>
        <img src="/static/logo.jpg" alt="Logo" className="dev-logo" />
      </div>
    </footer>
  );
};

export default Footer;
