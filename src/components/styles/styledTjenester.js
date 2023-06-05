import styled from "styled-components";

export const ContainerPhone = styled.section`
  display: flex;
  @media only screen and (max-width: 48em) {
    display: block;
  }
`;

export const ContainerVareProgrammer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  flex-basis: 100%;
  @media only screen and (max-width: 48em) {
    margin: 0 auto;
    padding: 2.5rem;

    position: relative;

    font-size: 0.9em;
  }
  @media only screen and (min-width: 2560px) {
    margin: 10rem 5rem;
  }
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-style: normal;

  @media only screen and (max-width: 48em) {
    font-size: 1.8em;
    position: relative;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

export const IntroVareProgrammer = styled.p`
  font-style: normal;
  font-weight: 400;

  margin: 0 auto;
  text-align: center;

  font-size: 1.2em;
  line-height: 165%;
  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 48em) {
    font-size: 1.1em;
    width: 90%;
    padding: 1em;
  }
`;

export const TextVareProgrammer = styled.p`
  font-style: normal;
  font-weight: 400;

  font-size: 1.2em;
  line-height: 165%;

  @media only screen and (min-width: 1024px) {
    font-size: 1.4em;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 1.8em;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 2.1em;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 3.2rem;
  }
`;

export const IMGcomputer = styled.img`
  width: auto;
  height: 50vh;

  margin-left: auto;
  margin-right: auto;
  border: 5px solid orange;

  @media only screen and (max-width: 48em) {
    display: none;
  }
`;

export const IMGtjenester = styled.img`
  height: 60vh;
  width: auto;

  @media only screen and (min-width: 1024px) {
    height: 45vh;
  }

  @media only screen and (min-width: 1440px) {
    height: 60vh;
  }
`;

export const BoxTjenester = styled.div`
  height: 40vh;
  width: 40vh;

  padding: 10vh;

  margin-bottom: 10vh;

  background-color: #ffe6c7;

  @media only screen and (max-width: 48em) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    height: 25vh;
    width: 25vh;

    margin-top: 6em;
  }

  @media only screen and (min-width: 1440px) {
    height: 40vh;
    width: 40vh;
  }
`;

export const IMGphoneTjenester = styled.img`
  display: none;

  @media only screen and (max-width: 48em) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;

    padding: 50px;
  }
`;
