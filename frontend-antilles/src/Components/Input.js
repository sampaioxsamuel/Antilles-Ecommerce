import styled from "styled-components";

export const InputContact = styled.input`
  text-family: "Lato", sans-serif;
  color: #212529;
  background-color: transparent;
  border: none;
  padding: 15px 5px;
  width: 450px;
  margin: 20px 0;
  border-bottom: 1px solid #212529;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const Message = styled.textarea`
  text-family: "Lato", sans-serif;
  color: #212529;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #212529;
  padding: 15px 5px;
  width: 450px;
  margin: 25px 0;
  transition: 480ms ease-in-out;

  &:focus,
  &:active {
    padding-bottom: 90px;
    outline: none;
  }
`;
