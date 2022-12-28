import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25px;
  margin-left: 30px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primory};
  background-color: #e4e7e7;
  border-radius: 2px;
  border-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const WrapperInfo = styled.div`
  width: 300px;
  flex-wrap: wrap;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const MoviesTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 20px;
`;

export const InfoImg = styled.img`
  width: 300px;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: ${props => props.theme.colors.primory};
  margin-bottom: 10px;
`;

export const InfoText = styled.h1`
  font-size: 18px;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 10px;
`;

export const InfoVideo = styled.iframe`
  width: 250px;
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 230px;
  }
`;

export const InfoLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.primory};
  margin-right: 60px;
  margin-bottom: 20px;
`;

export const InfoLine = styled.hr`
  color: ${props => props.theme.colors.primory};
  margin: 20px 0;
`;
