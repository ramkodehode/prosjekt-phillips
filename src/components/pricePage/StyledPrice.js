import styled from "styled-components";

export const BoxPrice = styled.div`
  height: 32em;
  width: 20em;
  border: 1.5px solid #fe8900;
  padding: 20px;
  background-color: white;

  @media only screen and (max-width: 40em) {
    height: auto;
    width: 100%;
    text-align: center;
    border: 4px solid #fe8900;
  }
`;

export const ContainerPrice = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5em;

  text-align: center;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  align-items: center;
  justify-content: space-between;

  font-family: "Poppins";
  font-size: 1.2rem;

  top: -300px;
`;

export const TextTaKontakt = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-size: 1.2em;
  margin: 0 auto;

  align-items: center;

  border-bottom: 1.5px solid #fe8900;

  width: 20%;
  position: relative;
  top: -300px;

  @media only screen and (max-width: 40em) {
    width: 50%;
  }
`;

export const TextArbeidsgiver = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-size: 1.2em;
  margin: 0 auto;
  padding: 20px;

  align-items: center;

  width: 70%;
  position: relative;
  top: -300px;
  @media only screen and (max-width: 40em) {
    top: 0px;
  }
`;

export const ImgPrice = styled.img`
  height: 5em;
  width: auto;
  padding-top: 10px;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fe8900;

  @media only screen and (max-width: 40em) {
    height: 2px;
  }
`;

export const ContainerGroup = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 0%;
  padding: 10px;

  flex-basis: 100%;
  align-items: center;

  @media only screen and (max-width: 40em) {
    display: block;
  }
`;

export const TextYellow = styled.h1`
  color: #fe8900;
  font-weight: 400;
  font-size: 1.2rem;
  @media only screen and (max-width: 40em) {
  }
`;