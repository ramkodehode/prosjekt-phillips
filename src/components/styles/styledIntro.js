import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: 40rem;

  margin: 0 auto;

  z-index: -1;

  background: conic-gradient(
    from -89.99deg at 50.03% 100%,
    #ffcb8d 0deg,
    rgba(234, 205, 154, 0.402865) 234.38deg,
    rgba(217, 217, 217, 0) 360deg
  );

  /* @media only screen and (max-width: 40em) {
    width: 30rem;
    height: 50rem;
  } */
`;

export const CaricatureImg = styled.img`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: auto;
  margin-top: 85px;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NewSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const MarginDiv = styled.div`
  margin-left: 50px;
  margin-top: 50px;

  max-width: 80%;
  /* @media only screen and (max-width: 40em) {
    margin-top: 50px;
  } */
`;

export const Tittel = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 50px;

  /* @media only screen and (max-width: 40em) {
    font-size: 2rem;
    max-width: 11em;
  } */
`;

export const UnderTitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 165%;

  color: #ae6208;

  /* @media only screen and (max-width: 40em) {
    font-size: 1.2rem;
    max-width: 15em;
  } */
`;

export const IntroText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 165%;

  /* @media only screen and (max-width: 40em) {
    font-size: 1.2rem;
    max-width: 15em;
  } */
`;
