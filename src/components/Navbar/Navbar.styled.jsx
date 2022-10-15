import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 6px 6px 0px rgba(148, 139, 148, 1);

  a {
    font-weight: 500;
    font-size: 16px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;
