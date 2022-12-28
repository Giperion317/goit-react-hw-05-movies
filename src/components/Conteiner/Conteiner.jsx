import PropTypes from 'prop-types';
import { StyledContainer } from './Conteiner.styled';

export const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node,
};