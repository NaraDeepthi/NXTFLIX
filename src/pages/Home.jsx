import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWatchLater } from '../context/WatchLaterContext';
import movies from '../data/movies';

export default function Home() {
  const navigate = useNavigate();
  const { toggleWatchLater, isWatchLater } = useWatchLater();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance', 'Horror', 'Fantasy'];

  // Filter movies by both search term and selected genre
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGenre('All');
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Hero Banner with Search Bar */}
      <section style={{ padding: '3rem 3rem 1.5rem 3rem', background: 'linear-gradient(to bottom, #1a0000, #000000)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>
          Discover your next favourite
        </h1>
        <p style={{ color: '#aaaaaa', fontSize: '1rem', marginBottom: '1.5rem' }}>
          Explore over 50 movies across every genre. Add to Watch Later and watch anytime.
        </p>

        {/* Search Input Bar */}
        <div style={{ maxWidth: '450px' }}>
          <input
            type="text"
            placeholder="Search movies by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '4px',
              border: '1px solid #333333',
              backgroundColor: '#141414',
              color: '#ffffff',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
        </div>
      </section>

      {/* Genre Filter Pills */}
      <div style={{ display: 'flex', gap: '0.6rem', padding: '1rem 3rem', overflowX: 'auto' }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              backgroundColor: selectedGenre === genre ? '#E50914' : '#1f1f1f',
              color: '#ffffff',
              border: 'none',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Main Content Grid or 404 Not Found View */}
      <div style={{ padding: '1rem 3rem' }}>
        {filteredMovies.length === 0 ? (
          /* 404 NOT FOUND VIEW WHEN NO MOVIES MATCH SEARCH */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5rem 1rem',
              textAlign: 'center',
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
            <button
              onClick={resetFilters}
              style={{
                backgroundColor: '#E50914',
                color: '#ffffff',
                padding: '0.75rem 1.8rem',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Back to Home
            </button>
          </div>
        ) : (
          /* MOVIE CARDS CATALOG GRID */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredMovies.map((movie) => {
              const added = isWatchLater(movie.id);

              return (
                <div
                  key={movie.id}
                  style={{
                    backgroundColor: '#141414',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: added ? '2px solid #E50914' : '1px solid #2b2b2b',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Rating Badge */}
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

                  {/* Click Image/Title to Navigate to Movie Details */}
                  <div
                    onClick={() => navigate(`/movies/${movie.id}`)}
                    style={{ height: '230px', width: '100%', cursor: 'pointer' }}
                  >
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div
                    style={{
                      padding: '0.8rem',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div onClick={() => navigate(`/movies/${movie.id}`)} style={{ cursor: 'pointer' }}>
                      <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.3rem 0', color: '#ffffff' }}>
                        {movie.title}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: '#888888', margin: '0 0 0.8rem 0' }}>
                        {movie.genre} • {movie.year}
                      </p>
                    </div>

                    {/* Add / Remove Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents navigating to details view on button click
                        toggleWatchLater(movie);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        backgroundColor: added ? '#222222' : '#E50914',
                        color: added ? '#E50914' : '#ffffff',
                        border: added ? '1px solid #E50914' : 'none',
                        borderRadius: '4px',
                        fontWeight: '700',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                      }}
                    >
                      {added ? '✓ Remove from List' : '+ Add to Watch Later'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}