import { Link } from 'react-router-dom';
const { default: styled } = require('styled-components');

export const PrimaryLink = styled(Link)`
  display: inline-block;
  padding: ${({ size }) => size};
  border: none;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  background-color: #212529;
  cursor: pointer;
  transition: 280ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: #3f2331;
  }

  .icon {
    position: relative;
    top: 2px;
    left: 9px;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-block;
  padding: ${({ size }) => size};
  border: none;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  background-color: #212529;
  cursor: pointer;
  transition: 280ms ease-in-out;

  &:hover,
  &:focus {
    outline: none;
    background-color: #fff;
    color: #3f2331;
  }

  .icon {
    position: relative;
    top: 2px;
    left: 9px;
  }
`;

export const SendButton = styled(PrimaryLink)`
  padding: 10px 40px;

  &:hover {
    background-color: #6c757d;
    color: #fff;
  }
`;
