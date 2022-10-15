import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    async function getMoviesByQuery() {
      try {
        const movies = await fetchMoviesByQuery(query);
        if (movies.length > 0) {
          setSearchMovies(movies);
        }
        if (movies.length === 0) {
          throw new Error(`No movies on the search query ${query}`);
        }
      } catch (e) {
        setError(e);
      }
    }

    getMoviesByQuery();
  }, [query]);

  function getQueryFromInput(query) {
    setError(null);
    const params = `query=${query}`;
    setSearchParams(params);
  }

  return (
    <>
      <SearchForm getQuery={getQueryFromInput} value={query} />
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
