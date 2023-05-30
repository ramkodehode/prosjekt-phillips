import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #ffe6c7;
  width: 100%;
  padding: 80px 0 80px 0;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 3em;
  text-align: center;
`;
export const HeadingTwo = styled.h2`
  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  font-size: 18px;
  color: rgb(229, 112, 27);
`;

export const HeadingThree = styled.h2`
  font-size: 16px;
  @media (min-width: 1920px) {
    font-size: 1.9rem;
  }
`;

export const UnorderedList = styled.ul`
  list-style-type: square;
  padding: 0;
  height: 130px;
  width: 230px;

  @media (min-width: 1920px) {
    font-size: 2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 130px;
  }
`;

export const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.li`
  @media (min-width: 1920px) {
  }
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
    padding: 50px;
    max-width: 90px;
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 1920px) {
  }

  @media (max-width: 760px) {
    transform: rotate(90deg);
  }
`;

export const Spacing = styled.div`
  padding: 27px 0 27px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const InfoContainerMobil = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
