import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api';
import { Link, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (e) {
        setError(e);
      }
    }

    getTrendingMovies();

    return () => {
      setError(null);
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && (
        <>
          <p>Something goes wrong=(</p>
          <p>{error.message}</p>
        </>
      )}
      <ul>
        {trendingMovies.map(({ title, name, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};