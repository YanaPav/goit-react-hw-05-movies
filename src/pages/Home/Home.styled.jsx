import styled from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  a {
    display: inline-block;
    transform: scale(1);
    transition: transform 250ms linear;
  }

  &:hover a {
    color: red;
    transform: scale(1.1);
  }
`;
