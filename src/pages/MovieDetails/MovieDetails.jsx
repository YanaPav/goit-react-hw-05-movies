import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../api';
import { Container } from '../../components/Container/Container.styled';
import {
  GoBackLink,
  MainBox,
  AdditionalInfoBox,
  StyledNavLink,
} from './MovieDetails.styled';
import { BsArrowLeft } from 'react-icons/bs';

const MovieDetails = () => {
  const [movieDtls, setMovieDtls] = useState('');
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  // console.log(location);

  useEffect(() => {
    async function getMovieDtls() {
      try {
        const movieInfo = await fetchMovieById(movieId);
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
      <Container>
        <GoBackLink to={location.state?.from || '/'}>
          <BsArrowLeft />
          Go back
        </GoBackLink>
      </Container>

      <Container>
        {error && <div>error</div>}
        <MainBox>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            width="220"
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
        </MainBox>
      </Container>

      <AdditionalInfoBox>
        <Container>
          <p>Additional information</p>
          <ul>
            <li>
              <StyledNavLink to="сast" state={{ from: location.state?.from }}>
                Cast
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="reviews"
                state={{ from: location.state?.from }}
              >
                Reviews
              </StyledNavLink>
            </li>
          </ul>
        </Container>
      </AdditionalInfoBox>

      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
