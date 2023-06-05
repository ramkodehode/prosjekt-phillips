import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(255, 230, 199);
  padding: 70px 0 70px 0;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 1.8em;
`;

export const HeadingTwoFase = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);

  @media (min-width: 1920px) {
    font-size: 1.9rem;
  }
`;

export const Text = styled.div``;

export const HeadingTextContainer = styled.div`
  text-align: center;
`;

export const FaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
  @media (max-width: 760px) {
    flex-direction: row;
  }
  @media (min-width: 1920px) {
    width: 250px;
    padding: 50px;
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 1920px) {
    max-width: 80px;
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;
