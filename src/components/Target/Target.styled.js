import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffe6c7;
  display: flex;
  flex-direction: column;

  @media (max-width: 2560px) {
    height: 900px;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  text-align: center;
  @media (max-width: 2560px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Vision = styled.div`
  padding: 29px;
  border: 1.5px solid #fe8900;
  margin: 25px;
  flex: 2.8;
`;

export const Goal = styled.div`
  padding: 29px;
  border: 1.5px solid #fe8900;
  margin: 25px;
  flex: 2.8;
`;

export const Values = styled.div`
  padding: 29px;
  border: 1.5px solid #fe8900;
  margin: 25px;
  flex: 2.8;
`;

export const HeadingOne = styled.h1`
  font-size: 22px;
  color: #fe8900;
  @media (min-width: 1920px) {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 165%;
  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }
`;
