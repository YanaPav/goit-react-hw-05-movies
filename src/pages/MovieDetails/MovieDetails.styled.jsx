import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  margin-top: 14px;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: #e6e8eb;
  transition: color 250ms linear;

  &:hover {
    color: red;
  }
`;

export const MainBox = styled.div`
  margin-top: 10px;
  display: flex;
  padding-bottom: 10px;

  img {
    margin-right: 14px;
  }
`;

export const AdditionalInfoBox = styled.div`
  border-top: 2px solid darkgray;
  border-bottom: 2px solid darkgray;

  p {
    font-weight: 600;
  }

  ul {
    display: flex;
    gap: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  line-height: 1.5;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: inherit;

  &.active {
    color: red;
  }
`;
