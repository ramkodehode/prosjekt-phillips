import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(255, 230, 199);
  padding: 70px 0 70px 0;

  @media only screen and (min-width: 1024px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 1.4rem;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 1.8em;
`;

export const HeadingTwoFase = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);

  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }
`;

export const Text = styled.div`
  font-size: 1.3em;

  @media (max-width: 768px) {
    padding: 20px 30px 0 30px;
  }
`;

export const HeadingTextContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const FaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media only screen and (min-width: 1440px) {
    padding: 2rem;
  }
`;

export const FaseInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 30px;
  }
`;
export const FaseAndArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowContainer = styled.div`
  display: flex;
  padding: 0 30px 0 30px;

  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1920px) {
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 1920px) {
    max-width: 80px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    transform: rotate(90deg);
  }
`;
