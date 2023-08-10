import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffe6c7;
  display: flex;
  flex-direction: column;

  height: 40rem;

  @media only screen and (min-width: 1440px) {
    height: 54rem;
  }

  @media only screen and (min-width: 1920px) {
    height: 44rem;
  }

  @media only screen and (min-width: 2560px) {
    height: 58rem;
  }

  @media (max-width: 768px) {
    height: 1700px;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 1440px) {
  }
  @media (max-width: 2560px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Vision = styled.div`
  padding: 29px;
  border: 1.5px solid #e5701b;
  margin: 25px;
  flex: 2.8;
`;

export const Goal = styled.div`
  padding: 29px;
  border: 1.5px solid #e5701b;
  margin: 25px;
  flex: 2.8;
`;

export const Values = styled.div`
  padding: 29px;
  border: 1.5px solid #e5701b;
  margin: 25px;
  flex: 2.8;
`;

export const HeadingOne = styled.h1`
  font-size: 2rem;
  color: #e5701b;

  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 165%;

  @media only screen and (min-width: 1440px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
