import styled from "styled-components";

export const ContainerPhone = styled.section`
  display: flex;
  @media only screen and (max-width: 40em) {
    display: block;
    max-width: 90%;
  }
`;

export const ContainerVareProgrammer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;

  flex-basis: 100%;
  @media only screen and (max-width: 40em) {
    margin-left: 25px;
    padding: 0px;

    position: relative;

    font-size: 0.9em;
  }
  @media only screen and (min-width: 2400px) {
    margin: 10rem 0;
  }
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-style: normal;

  @media only screen and (max-width: 40em) {
    font-size: 1.8em;
    position: relative;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 6rem;
  }
`;

export const IntroVareProgrammer = styled.p`
  font-style: normal;
  font-weight: 400;

  width: 70%;
  margin: 0 auto;
  text-align: left;

  font-size: 1.2em;
  line-height: 165%;
  @media only screen and (min-width: 2400px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 40em) {
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
  @media only screen and (min-width: 2400px) {
    font-size: 3.5rem;
  }
`;

export const IMGcomputer = styled.img`
  width: auto;
  height: 50vh;

  margin-left: auto;
  margin-right: auto;
  border: 5px solid orange;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const IMGtjenester = styled.img`
  height: 60vh;
  width: auto;
`;

export const BoxTjenester = styled.div`
  height: 40vh;
  width: 40vh;

  padding: 10vh;

  background-color: #ffe6c7;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const IMGphoneTjenester = styled.img`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;

    padding: 50px;
  }
`;
