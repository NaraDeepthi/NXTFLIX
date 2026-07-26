import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useWatchLater } from '../context/WatchLaterContext';
import movies from '../data/movies';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleWatchLater, isWatchLater } = useWatchLater();

  // Find movie by ID
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', padding: '5rem' }}>
        <h2>Movie not found!</h2>
        <button onClick={() => navigate('/')} className="btn-primary-red">
          Back to Home
        </button>
      </div>
    );
  }

  const added = isWatchLater(movie.id);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '3rem' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem' }}
      >
        ← Back
      </button>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <img 
          src={movie.poster} 
          alt={movie.title} 
          style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }} 
        />

        <div style={{ flex: 1, maxWidth: '600px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            {movie.title}
          </h1>
          <p style={{ color: '#ffc107', fontWeight: 'bold', marginBottom: '1rem' }}>
            ★ {movie.rating} Rating
          </p>
          <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>
            {movie.genre} • {movie.year} • {movie.duration || '120 min'}
          </p>

          <button
            onClick={() => toggleWatchLater(movie)}
            style={{
              backgroundColor: added ? '#222' : '#E50914',
              color: added ? '#E50914' : '#fff',
              border: added ? '1px solid #E50914' : 'none',
              padding: '0.8rem 1.8rem',
              borderRadius: '4px',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            {added ? '✓ Remove from Watch Later' : '+ Add to Watch Later'}
          </button>
        </div>
      </div>
    </div>
  );
}