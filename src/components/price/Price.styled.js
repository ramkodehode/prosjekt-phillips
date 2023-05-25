import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 50px 0 50px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeadingOne = styled.h1`
  font-size: 2em;
  text-align: center;
  padding: 50px;
`;

export const Line = styled.line`
  border: 1.3px solid #fe8900;
`;

export const HeadingTwo = styled.h2`
  font-size: 1.2rem;
  color: #fe8900;
  text-align: center;
`;

export const HeadingThree = styled.h3``;

export const PriceBoxContainer = styled.div`
  display: flex;

  flex-direction: row;
  gap: 100px;
  /* justify-content: space-between;
  width: 70%; */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;
export const PriceBox = styled.div`
  padding: 60px;
  border: 1.5px solid #fe8900;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StudieveiledningIcon = styled.img`
  max-width: 100px;
`;

export const Paragraph = styled.p`
  text-align: center;
`;
