import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  const jwtToken = Cookies.get('jwt_token');
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      Cookies.set('jwt_token', 'mock_jwt_token', { expires: 30 });
      navigate('/', { replace: true });
    } else {
      setErrorMsg('Please enter both email and password');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Left Hero Brand Section */}
      <div
        style={{
          flex: 1,
          background: 'radial-gradient(circle at top left, rgba(229, 9, 20, 0.35), transparent 60%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 5rem',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            color: '#E50914',
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          NXTFLIX
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#cccccc',
            marginTop: '1rem',
            maxWidth: '420px',
            lineHeight: '1.6',
          }}
        >
          Unlimited movies, shows and more. Watch anywhere. Cancel anytime.
        </p>
      </div>

      {/* Right Sign-In Form Section */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            backgroundColor: '#141414',
            padding: '3rem 2.5rem',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '380px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: '#fff' }}>
            Sign In
          </h2>

          {errorMsg && (
            <p style={{ color: '#E50914', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
              {errorMsg}
            </p>
          )}

          {/* Email Field */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <label
              style={{
                fontSize: '0.75rem',
                color: '#a3a3a3',
                fontWeight: '700',
                letterSpacing: '0.5px',
                marginBottom: '0.5rem',
              }}
            >
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid #2b2b2b',
                borderRadius: '4px',
                padding: '0.8rem 1rem',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}>
            <label
              style={{
                fontSize: '0.75rem',
                color: '#a3a3a3',
                fontWeight: '700',
                letterSpacing: '0.5px',
                marginBottom: '0.5rem',
              }}
            >
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid #2b2b2b',
                borderRadius: '4px',
                padding: '0.8rem 1rem',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#E50914',
              color: '#ffffff',
              border: 'none',
              padding: '0.85rem',
              borderRadius: '4px',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}