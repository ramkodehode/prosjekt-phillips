import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffe6c7;
  display: flex;
  justify-content: center;
  padding: 30px 50px 30px 50px;
`;

export const HeadingTwoWrapper = styled.div``;

export const Content = styled.div``;

export const HeadingOne = styled.h1`
  font-size: 24px;
`;
export const HeadingTwo = styled.h2`
  font-size: 18px;
  color: rgb(229, 112, 27);
`;

export const HeadingThree = styled.h2`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const UnorderedList = styled.ul`
  list-style-type: square;
`;

export const List = styled.li`
  padding: 2px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

export const Arrow = styled.img`
  width: 70px;
  height: 90px;
  padding: 40px;

  @media (max-width: 700px) {
    transform: rotate(90deg);
  }
`;

export const Spacing = styled.div`
  padding: 20px 0 20px 0;
`;

export const InfoContainer = styled.div`
  max-width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoContainerWrapper = styled.div`
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
