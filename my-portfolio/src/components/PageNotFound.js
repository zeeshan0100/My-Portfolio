import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" style={{
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        borderRadius: '5px',
        textDecoration: 'none',
      }}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
