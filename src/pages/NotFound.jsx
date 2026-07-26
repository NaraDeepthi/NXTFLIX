import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '900',
          color: '#E50914',
          margin: 0,
          lineHeight: '1',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginTop: '1rem',
          marginBottom: '0.5rem',
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: '#a3a3a3',
          fontSize: '1rem',
          maxWidth: '450px',
          marginBottom: '2rem',
          lineHeight: '1.5',
        }}
      >
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: '#E50914',
          color: '#ffffff',
          padding: '0.75rem 1.8rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '0.95rem',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}