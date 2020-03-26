import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF4F4F;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  opacity: 1;
  transition: opacity 0.1s;

  :hover {
    opacity: 0.9;
    transition: opacity 0.1s;
  }
`;
