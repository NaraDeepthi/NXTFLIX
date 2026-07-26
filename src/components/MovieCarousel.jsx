import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function MovieCarousel({ title, movies, direction = 'left' }) {
  // Duplicating list for infinite loop effect
  const carouselItems = [...movies, ...movies];

  return (
    <div className="carousel-section">
      <h2 className="section-title">{title}</h2>
      <div className="carousel-wrapper">
        <div className={`carousel-track track-${direction}`}>
          {carouselItems.map((movie, idx) => (
            <Link 
              to={`/movies/${movie.id}`} 
              key={`${movie.id}-${idx}`} 
              className="carousel-item"
            >
              <img src={movie.poster} alt={movie.title} loading="lazy" />
              <div className="carousel-overlay">
                <h4>{movie.title}</h4>
                <p>{movie.genre} · <Star size={12} fill="#E50914" color="#E50914" /> {movie.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}