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
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-style: normal;

  @media only screen and (max-width: 40em) {
    font-size: 1.2em;
    position: relative;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 6rem;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 70%;
  width: 70%;
`;
