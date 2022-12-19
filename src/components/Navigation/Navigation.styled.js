import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.primory};

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;
