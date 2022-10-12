import { useState, useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { fetchMovieById } from '../../api';

export const MovieDetails = () => {
  const [movieDtls, setMovieDtls] = useState('');
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDtls() {
      try {
        const movieInfo = await fetchMovieById(movieId);
        console.log(movieInfo);
        setMovieDtls(movieInfo);
      } catch (e) {
        setError(e);
      }
    }

    getMovieDtls();

    return () => {
      setError(null);
    };
  }, [movieId]);

  if (!movieDtls) return;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDtls;

  return (
    <>
      {error && <div>error</div>}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="250"
        />
        <div>
          <h2>
            {title} ({Number.parseInt(release_date)})
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="сast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
