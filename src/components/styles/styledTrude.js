import styled from "styled-components";

export const ImgTrude = styled.img`
  height: 80vh;
  width: auto;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const PhoneImgTrude = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    height: 50vh;
    width: auto;
    padding: 50px;
  }
`;

export const ContainerTrude = styled.section`
  /* display: flex;
  flex-direction: column; */
  margin-left: 50px;
  margin-bottom: 100px;
  

  @media only screen and (max-width: 40em) {
    margin: 10px;
  }
`;

export const TrudeText = styled.h3`
  font-style: normal;
  font-weight: 600;

  color: #faa100;

  @media only screen and (max-width: 40em) {
    font-size: 1em;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 3rem;
  }
`;

export const TitleTrude = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  color: #272521;
  @media only screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 6.5rem;
    line-height: 100%;
  }
`;

export const MainTextTrude = styled.p`
  max-width: 90%;

  font-weight: 400;
  line-height: 165%;
  font-size: 1.2rem;
  color: #272521;

  @media only screen and (max-width: 40em) {
    font-size: 1.1rem;
    max-width: 100%;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 3.5rem;
  }
`;
