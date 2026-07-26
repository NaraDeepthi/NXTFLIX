import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useWatchLater } from '../context/WatchLaterContext';

export default function Header() {
  const navigate = useNavigate();
  const { watchLater } = useWatchLater();

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login', { replace: true });
  };

  return (
    <header className="header-container">
      <Link to="/" className="brand-logo">NXTFLIX</Link>
      <nav className="header-nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/watch-later" className="nav-item watch-later-item">
          Watch Later
          {watchLater && watchLater.length > 0 && (
            <span className="watch-later-badge">{watchLater.length}</span>
          )}
        </Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
    </header>
  );
}