import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #ffe6c7;
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
  font-size: 1.8em;
  text-align: center;
`;
export const HeadingTwo = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);
`;

export const HeadingThree = styled.h2`
  font-size: 16px;
`;

export const UnorderedList = styled.ul`
  list-style-type: square;
  padding: 0;
  height: 100px;
  width: 200px;
`;

export const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.li`
  margin-left: 1rem;
  line-height: 165%;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  @media (max-width: 760px) {
    flex-direction: row;
  }
`;

export const Arrow = styled.img`
  width: 70px;
  height: 90px;

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
