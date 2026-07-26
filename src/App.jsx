import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { WatchLaterProvider } from './context/WatchLaterContext';
import Header from './components/Header';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const jwtToken = Cookies.get('jwt_token');
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function MainLayout() {
  const location = useLocation();

  // Explicitly hide Header on /login and /not-found
  const isNotFoundRoute =
    location.pathname === '/not-found' ||
    !['/', '/login', '/watch-later'].some((path) =>
      location.pathname.startsWith(path)
    );

  const showHeader = location.pathname !== '/login' && !isNotFoundRoute;

  return (
    <div className="app-container" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      {showHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watch-later"
          element={
            <ProtectedRoute>
              <WatchLater />
            </ProtectedRoute>
          }
        />
        {/* Explicit /not-found and wildcard catch-all */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <WatchLaterProvider>
      <MainLayout />
    </WatchLaterProvider>
  );
}