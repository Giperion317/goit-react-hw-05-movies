import styled from 'styled-components';

export const NoneText = styled.p`
  text-align: center;
  font-size: 26px;
  padding: 20px 0;
  color: ${props => props.theme.colors.black};
`;

export const AutorName = styled.b`
  font-size: 16px;
  color: ${props => props.theme.colors.primory};
`;

export const ReviewsText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.accent};
  margin-top: 10px;
  margin-bottom: 20px;
`;
