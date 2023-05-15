import styled from "styled-components";

export const BoxPrice = styled.div`
  height: 28em;
  width: 21em;
  border: 1.5px solid #fe8900;
  padding: 5rem 2rem;
  background-color: white;

  @media only screen and (max-width: 40em) {
    height: auto;
    width: 100%;
    text-align: center;
    border: 4px solid #fe8900;
    padding: 10px 30px;
    margin-top: 80px;
  }
  @media only screen and (min-width: 2400px) {
    border: 5px solid #fe8900;
    height: 28em;
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
  @media only screen and (min-width: 2400px) {
    margin: 0 -10rem;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;

  top: -10rem;

  @media only screen and (min-width: 2400px) {
    font-size: 4rem;
    top: -30rem;

    margin: 10rem;
  }
`;

export const TextTaKontakt = styled.h1`
  text-align: center;
  font-size: 1.5em;
  margin: 0 auto;

  align-items: center;

  top: -150px;

  @media only screen and (max-width: 40em) {
    width: 50%;
    top: 0;
  }

  @media only screen and (min-width: 2400px) {
    font-size: 7rem;
  }
`;

export const TextArbeidsgiver = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-size: 1.2em;
  margin: 0 auto;
  padding: 20px;

  max-width: 50%;

  align-items: center;
  top: -150px;
  width: 70%;

  @media only screen and (max-width: 40em) {
    top: 0px;
    max-width: 100%;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 4rem;
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

  @media only screen and (min-width: 2400px) {
    height: 3px;
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
  @media only screen and (min-width: 2400px) {
    font-size: 5rem;
  }
`;

export const DivPhoneArbeidsgiver = styled.div`
  background-color: #ffe6c7;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;
