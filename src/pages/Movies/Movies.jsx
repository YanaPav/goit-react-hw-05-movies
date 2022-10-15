import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [userQuery, setUserQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query) setUserQuery(query);
  }, []);

  useEffect(() => {
    if (!userQuery) return;

    async function getMoviesByQuery() {
      try {
        const movies = await fetchMoviesByQuery(userQuery);
        if (movies.length > 0) {
          setSearchMovies(movies);
        }
        if (movies.length === 0) {
          console.log('movies is empty');
        }
      } catch (e) {
        setError(e);
      }
    }

    getMoviesByQuery();
  }, [userQuery]);

  function onSubmit(e) {
    setError(null);
    console.log(query);
    e.preventDefault();
    setUserQuery(query);
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {error && <p>{error.message}</p>}

      {searchMovies && (
        <ul>
          {searchMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
