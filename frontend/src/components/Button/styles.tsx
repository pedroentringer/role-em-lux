import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
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
  transition:  opcity 1s;
  -moz-transition:  opcity 1s;
  -webkit-transition:  opcity 1s;
  -o-transition:  opcity 1s;
  -ms-transition:  opcity 1s;

  :hover {
    opacity: 0.9;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .spin{
    animation: spin 1s linear infinite;
    font-size: 18px;
  }

`;
