import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffe6c7;
  display: flex;
  flex-direction: column;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  text-align: center;

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
`;

export const Paragraph = styled.p``;
