import React, { createContext, useContext, useState, useEffect } from 'react';

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(() => {
    try {
      const saved = localStorage.getItem('nxtflix_watch_later');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('nxtflix_watch_later', JSON.stringify(watchLater));
  }, [watchLater]);

  const toggleWatchLater = (movie) => {
    if (!movie || !movie.id) return;
    setWatchLater((prevList) => {
      const exists = prevList.some((item) => String(item.id) === String(movie.id));
      if (exists) {
        return prevList.filter((item) => String(item.id) !== String(movie.id));
      } else {
        return [...prevList, movie];
      }
    });
  };

  const isWatchLater = (movieId) => {
    return watchLater.some((item) => String(item.id) === String(movieId));
  };

  return (
    <WatchLaterContext.Provider value={{ watchLater, toggleWatchLater, isWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);