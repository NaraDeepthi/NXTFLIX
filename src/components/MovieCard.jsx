import { Link } from 'react-router-dom';
import { Star, Play } from 'lucide-react';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="poster-container" style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
        <img 
          src={movie.poster} 
          alt={movie.title} 
          style={{ width: '100%', height: '270px', objectFit: 'cover', display: 'block' }} 
        />
        <div 
          className="rating-badge"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'rgba(0,0,0,0.75)',
            padding: '2px 8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.85rem'
          }}
        >
          <Star size={12} fill="#E50914" color="#E50914" />
          <span>{movie.rating}</span>
        </div>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {movie.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '0.2rem' }}>
          {movie.genre} · {movie.year} · {movie.duration}
        </p>
      </div>
    </Link>
  );
}