import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header" style={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', columnGap: '4vw', padding: '1vw 0px 1vw 2vw', width: '100%', height: '10vw', fontSize: '2vw', backgroundColor: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
    <h1 style={{ fontSize: '2em', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>My Portfolio</h1>
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ul style={{ display: 'flex', columnGap: '4vw', alignItems: 'center', justifyContent: 'center', listStyleType: 'none' }}>
        <li style={{ fontSize: '2vw' }}>
          <NavLink
            to="/My-Portfolio"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? 'blue' : 'grey',
              fontSize: '1.5em',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 'bold'
            })}
          >
            CV
          </NavLink>
        </li>
        <li style={{ fontSize: '2vw' }}>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? 'blue' : 'grey',
              fontSize: '1.5em',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 'bold'
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
