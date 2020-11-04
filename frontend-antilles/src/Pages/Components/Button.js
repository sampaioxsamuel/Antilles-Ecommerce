const { default: styled } = require('styled-components');

export const PrimaryButton = styled.a`
  display: inline-block;
  padding: 13px 28px;
  border: none;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 18px;
  background-color: #212529;
  cursor: pointer;
  transition: 280ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: #212529;
  }

  .icon {
    position: relative;
    top: 2px;
    left: 9px;
  }
`;
