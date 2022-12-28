import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.ul`
  margin-left: 30px;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 0;
  color: ${props => props.theme.colors.white};

  &.active {
    color: ${props => props.theme.colors.accent};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      background-color: ${props => props.theme.colors.accent};
    }
  }
`;
