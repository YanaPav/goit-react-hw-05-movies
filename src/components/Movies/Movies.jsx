import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../api';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function getMoviesByQuery() {
      try {
        const movies = await fetchMoviesByQuery(query);
        setSearchMovies(movies);
      } catch (e) {
        setError(e);
      }
    }

    getMoviesByQuery();

    return () => {
      setError(null);
    };
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  //   return (
  //     <form>
  //       <input type="text" name="query"/>
  //       <button type="submit" onClick={onSubmit}>
  //         Search
  //       </button>
  //     </form>
  //   );
};
