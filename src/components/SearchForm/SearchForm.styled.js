import styled from 'styled-components';

export const Searchform = styled.form`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 3px;
  overflow: hidden;
  margin: 20px auto;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px;
  background-image: url('https://img.icons8.com/search');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.colors.primory};
  }

  & .ButtonLabel {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: ${props => props.theme.colors.accent};

  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: ${props => props.theme.colors.black};
  }
`;
