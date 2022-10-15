import styled from 'styled-components';

export const CastListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  img {
    margin-right: 10px;
  }
`;
