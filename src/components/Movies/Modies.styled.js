import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MoviesItem = styled.li`
  width: 270px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 8px 12px 14px 2px rgba(71, 71, 71, 0.6);
  }
`;

export const MoviesLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background-color: #e4e7e7;
`;

export const MoviesTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.primory};
`;
