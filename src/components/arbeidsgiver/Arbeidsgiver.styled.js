import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(255, 230, 199);
  padding: 40px;

  @media (min-width: 2160px) {
    font-size: 3rem;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 1.8em;
`;

export const HeadingTwoFase = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);

  @media (min-width: 2160px) {
    font-size: 4rem;
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
    text-align: center;
  }
`;

export const FaseInnerContainer = styled.div`
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
  @media (min-width: 2160px) {
    width: 250px;
    padding: 50px;
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 2160px) {
    max-width: 155px;
  }

  @media (max-width: 760px) {
    transform: rotate(90deg);
  }
`;
