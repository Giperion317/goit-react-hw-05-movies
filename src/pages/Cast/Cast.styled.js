import styled from 'styled-components';

export const NoneText = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  color: ${props => props.theme.colors.black};
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CastItem = styled.li`
  width: 100px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const CastName = styled.b`
  font-size: 16px;
  color: ${props => props.theme.colors.primory};
`;

export const CharterName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.accent};
`;
