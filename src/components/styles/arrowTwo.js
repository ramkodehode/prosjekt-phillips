import styled from "styled-components";

export const ArrowLine = styled.div`
  width: 72px;
  height: 0px;
  position: relative;
  top: -1px;
  border: 2px solid #000000;
  transform: rotate(90deg);

  @media only screen and (max-width: 40em) {
  }
`;

export const ArrowLeft = styled.div`
  width: 20px;
  height: 0px;
  border: 2px solid #000000;
  position: relative;

  background-color: black;

  transform: rotate(45deg);

  right: 58px;
  top: 30px;

  @media only screen and (max-width: 40em) {
  }
`;

export const ArrowRight = styled.div`
  width: 20px;
  height: 0px;
  border: 2px solid #000000;
  position: relative;

  right: 67px;
  top: 30px;

  background-color: black;

  transform: rotate(-45deg);

  @media only screen and (max-width: 40em) {
  }
`;

export const ArrowDiv = styled.div`
  display: flex;

  justify-content: center;

  margin: 80px 100px;

  position: relative;

  left: 20px;

  @media only screen and (max-width: 40em) {
  }
`;

const ArrowTwo = () => {
  return (
    <div>
      <ArrowDiv>
        <ArrowLine />
        <ArrowLeft /> <ArrowRight />
      </ArrowDiv>
    </div>
  );
};

export default ArrowTwo;
