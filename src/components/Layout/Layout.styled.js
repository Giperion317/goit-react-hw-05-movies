import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 0;
  background-color: ${props => props.theme.colors.primory};
  border-bottom: 1px solid #ececec;
`;

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primory};
  border-top: 1px solid #ececec;
`;

export const FooterLink = styled.a`
  font-size: 18px;
  color: ${props => props.theme.colors.accent};
`;
