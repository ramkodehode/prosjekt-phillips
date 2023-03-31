import styled from "styled-components";

export const CarrierContainer = styled.section`
  display: none;
  flex-direction: column;
  text-align: center;

  justify-content: center;

  padding: 0 50px;

  max-width: 25%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 165%;
`;

export const YellowDot = styled.div`
  margin-top: 100px;
  border-radius: 25px;
  width: 32px;
  height: 29px;
  left: 155px;
  top: 927px;

  background: #faa100;
`;

export const ImgStudentBehindFence = styled.img`
  width: auto;
  height: 70vh;
  margin: 0 auto;
  z-index: -1;
  position: relative;
  top: 150px;

  @media only screen and (max-width: 40em) {
    height: 30vh;
    padding: 100px 0;
  }
`;
