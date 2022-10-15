import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledLink } from './Navbar.styled';
import { Container } from '../../components/Container/Container.styled';

export const Navbar = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
