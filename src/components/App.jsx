import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from '../pages/Home/Home';
import GlobalStyle from './GlobalStyles';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { Movies } from '../pages/Movies/Movies';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="сast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Page doesn't exist</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
