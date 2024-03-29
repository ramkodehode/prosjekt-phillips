import styled from "styled-components";

export const ImgTrude = styled.img`
  height: 60vh;
  width: auto;
  padding: 3rem;

  @media only screen and (max-width: 48em) {
    display: none;
  }
  @media only screen and (min-width: 2400px) {
    padding: 10rem;
  }
`;

export const PhoneImgTrude = styled.img`
  display: none;
  @media only screen and (max-width: 48em) {
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 50vh;
    width: auto;

    padding: 5rem 0;
  }

  @media only screen and (max-width: 980px) {
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 50vh;
    width: auto;

    padding: 5rem 0;
  }
`;

export const ContainerTrude = styled.section`
  /* display: flex;
  flex-direction: column; */
  margin: 3rem;

  @media only screen and (max-width: 48em) {
    margin: 1rem;
  }

  @media only screen and (min-width: 2560px) {
    padding: 5rem;
  }
`;

export const TrudeText = styled.h3`
  font-style: normal;
  font-weight: 600;

  color: #e5701b;

  @media only screen and (max-width: 48em) {
    font-size: 1em;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

export const TitleTrude = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  color: #272521;
  @media only screen and (max-width: 48em) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2em;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 3.5rem;
    line-height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

export const MainTextTrude = styled.p`
  font-weight: 400;
  line-height: 165%;
  font-size: 1.2rem;
  color: #272521;

  @media only screen and (max-width: 48em) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.3em;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

export const BoxTrude = styled.div`
  height: 60vh;
  width: 45vh;
  background-color: #ffe6c7;
  margin: 8em 1em;

  @media only screen and (max-width: 48em) {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 15rem;
  }
  @media only screen and (min-width: 2560px) {
  }
`;
