import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchLater } from '../context/WatchLaterContext';

export default function WatchLater() {
  const { watchLater, toggleWatchLater } = useWatchLater();

  if (!watchLater || watchLater.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
        <p style={{ color: '#a3a3a3', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Your Watch Later list is empty.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: '#E50914',
            color: '#fff',
            padding: '0.75rem 1.8rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '0.95rem',
          }}
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2.5rem 3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>
        Watch Later ({watchLater.length})
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {watchLater.map((movie) => (
          <div
            key={movie.id}
            style={{
              backgroundColor: '#141414',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid #2b2b2b',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#ffc107',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                padding: '2px 8px',
                borderRadius: '10px',
                zIndex: 2,
              }}
            >
              ★ {movie.rating}
            </span>

            <div style={{ height: '230px', width: '100%' }}>
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '0.8rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.3rem 0', color: '#fff' }}>
                  {movie.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#888', margin: '0 0 0.8rem 0' }}>
                  {movie.genre} • {movie.year}
                </p>
              </div>

              {/* Remove / Delete Button */}
              <button
                onClick={() => toggleWatchLater(movie)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: '#222',
                  color: '#E50914',
                  border: '1px solid #E50914',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                ✕ Delete from List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}