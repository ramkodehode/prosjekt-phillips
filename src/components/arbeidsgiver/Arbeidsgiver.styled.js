import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(255, 230, 199);
  max-width: 100%;
  padding: 40px;
`;

export const HeadingOne = styled.h1`
  font-size: 24px;
`;

export const HeadingTwoFase = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);
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
`;

export const FaseInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 760px) {
    flex-direction: row;
  }
`;

export const Arrow = styled.img`
  width: 70px;
  height: 90px;
  padding: 40px;

  @media (max-width: 760px) {
    transform: rotate(90deg);
  }
`;
