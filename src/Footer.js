import React from 'react';
import './Footer.css';  // Custom CSS for the Footer

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container text-center">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <p>
          <a href="#" className="text-light mx-2">Privacy Policy</a> | 
          <a href="#" className="text-light mx-2">Terms of Service</a> | 
          <a href="#" className="text-light mx-2">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
