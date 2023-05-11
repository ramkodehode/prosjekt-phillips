import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #ffe6c7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeadingOne = styled.h1`
  font-size: 24px;
`;
export const HeadingTwo = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);
`;

export const HeadingThree = styled.h2`
  font-size: 16px;
`;

export const UnorderedList = styled.ul``;

export const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const List = styled.li`
  padding: 2px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media (max-width: 760px) {
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
  padding: 20px 0 20px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
