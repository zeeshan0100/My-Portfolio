import React from 'react';

const Footer = () => (

  <footer
    className="footer"
    style={{
      backgroundColor: 'black',
      textAlign: 'center',
      boxShadow: '0 -4px 8px rgba(0,0,0,0.2)',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: "1vw",
      fontWeight: 'bold'
    }}
  >
    <p style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center", fontSize: '2.5em', width: "100%", height: "10vw", color: "white"
    }}>&copy; 2024 My Portfolio. All rights reserved.</p>
  </footer>

);

export default Footer;
