import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="сast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Page doesn't exists</div>} />
      </Routes>
    </div>
  );
};
