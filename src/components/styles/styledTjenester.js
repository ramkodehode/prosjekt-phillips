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

    top: 100px;

    font-size: 0.9em;
  }
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;

  @media only screen and (max-width: 40em) {
    font-size: 1.2em;
    position: relative;
    top: 100px;
  }
`;

export const TextVareProgrammer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 165%;
`;
