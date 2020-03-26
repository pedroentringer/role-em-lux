import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: all ease 1s;
  z-index: 10;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;

export const Card = styled.div`
  max-height: 80vh;
  background-color: #fff;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 6px;

  ::-webkit-scrollbar {
    width: 6px;
  }
    
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: rgba(255,0,0,0.3); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); 
  }

`;
