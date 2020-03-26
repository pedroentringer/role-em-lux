import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   margin: 5px;
   display: flex;
   flex-direction: column;
   justify-conten: center;
   align-items: center;

   h3 {
      margin-bottom: 0px;
   }

   p {
      font-size: 14px;
      text-align: center;
   }
`;

export const IconCard = styled.div`
   width: 80px;
   height: 80px;
   border: 1px solid #fff;
   border-radius: 8px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 40px;
   background-color: #FF4F4F
`;