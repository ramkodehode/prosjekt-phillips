import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #ffe6c7;
  width: 100%;
  padding: 20px 0 20px 0;

  @media (max-width: 768px) {
    flex-direction: row;
  }
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
    justify-content: center;
  }
  @media (min-width: 2160px) {
    height: 500px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const HeadingTwo = styled.h2`
  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

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
  width: 230px;
  padding-left: 0;
  list-style-position: inside;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    width: 400px;

    font-size: 2rem;
  }

  @media (max-width: 768px) {
    height: 130px;
  }
`;

export const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 1920px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.li`
  width: 130%;
  @media (min-width: 2160px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1920px) {
    width: 500px;
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
  }
`;

export const Arrow = styled.img`
  max-width: 65px;

  @media (min-width: 1920px) {
    padding-left: 200px;
  }

  @media (max-width: 760px) {
    transform: rotate(90deg);
  }
`;

export const Spacing = styled.div`
  padding: 40px 0 100px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 2160px) {
  }

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
