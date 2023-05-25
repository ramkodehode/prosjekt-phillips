import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 110vh;
  margin: 0 auto;
  z-index: -1;

  /* background: conic-gradient(
    from -89.99deg at 50.03% 100%,
    #ffcb8d 0deg,
    rgba(234, 205, 154, 0.402865) 234.38deg,
    rgba(217, 217, 217, 0) 360deg
  ); */

  background-color: #ffe6c7;

  @media only screen and (max-width: 40em) {
    height: 45rem;
  }

  @media only screen and (min-width: 1440px) {
    height: 100vh;
  }
`;

export const CaricatureImg = styled.img`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: auto;

  padding: 10rem 2rem;

  @media only screen and (max-width: 40em) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    height: 65vh;
  }

  @media only screen and (min-width: 1440px) {
    height: 80vh;
  }
`;

export const PhoneCaricatureImg = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: flex;
    flex-direction: row;
    height: 35vh;
    width: auto;
    z-index: 1;
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
  padding: 2.5rem;

  @media only screen and (max-width: 40em) {
    margin-top: 50px;
    margin-left: 25px;
  }
`;

export const Tittel = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.7rem;
  line-height: 50px;

  @media only screen and (max-width: 40em) {
    font-size: 1.5rem;
    max-width: 100%;
    line-height: 40px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 3.5rem;
    line-height: 100%;
  }
`;

export const UnderTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;

  color: #e5701b;

  @media only screen and (max-width: 40em) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
`;

export const UnderTitleYellow = styled.h2`
  font-style: normal;
  font-weight: 550;
  font-size: 1.8rem;

  color: #e5701b;

  @media only screen and (max-width: 40em) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 2.5rem;
  }
`;

export const IntroText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 165%;

  @media only screen and (max-width: 40em) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }
`;
