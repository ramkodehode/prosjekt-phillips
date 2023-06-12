import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #ffe6c7;
  width: 100%;
  padding: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1920px) {
    padding: 100px 0 280px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 2160px) {
    height: 500px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 3.5rem;
  text-align: center;

  @media (min-width: 1920px) {
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const HeadingTwo = styled.h2`
  width: 300px;

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  color: rgb(229, 112, 27);
`;

export const HeadingThree = styled.h2`
  font-size: 16px;
  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }
`;

export const UnorderedList = styled.ul`
  height: 100px;
  width: 250px;
  list-style-type: square;
  font-size: 1.2em;
  padding-left: 0;
  list-style-position: outside;

  @media (min-width: 2560px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1920px) {
  }

  @media (max-width: 768px) {
    height: 130px;
  }
`;

export const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.li`
  margin: 0;

  @media (min-width: 2560px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1920px) {
    font-size: 1.9rem;
  }
`;

export const ArrowContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1920px) {
    padding: 50px;
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 1920px) {
    max-width: 100px;
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

export const Spacing = styled.div`
  padding: 40px 0 100px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const InfoContainerMobil = styled.div`
  @media (max-width: 768px) {
  }
`;
