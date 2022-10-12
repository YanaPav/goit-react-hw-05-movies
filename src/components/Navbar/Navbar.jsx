import { NavLink, Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
