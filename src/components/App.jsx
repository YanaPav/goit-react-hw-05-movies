import { Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
