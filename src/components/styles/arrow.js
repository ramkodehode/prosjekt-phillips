import styled from "styled-components";

export const ArrowLine = styled.div`
  margin-top: 50px;
  width: 72px;
  height: 0px;
  position: relative;

  top: -1px;

  border: 2px solid #000000;
  transform: rotate(90deg);
`;

export const ArrowLeft = styled.div`
  width: 20px;
  height: 0px;
  border: 2px solid #000000;
  position: relative;
  top: 26px;
  left: 18.5px;
  background-color: black;

  transform: rotate(45deg);
`;

export const ArrowRight = styled.div`
  width: 20px;
  height: 0px;
  border: 2px solid #000000;
  position: relative;
  top: 21px;
  left: 33px;
  background-color: black;
  transform: rotate(-45deg);
`;

export const ArrowDiv = styled.div`
  margin: 50px 60px;
`;

const Arrow = () => {
  return (
    <div>
      <ArrowDiv>
        <ArrowLine />
        <ArrowLeft /> <ArrowRight />
      </ArrowDiv>
    </div>
  );
};

export default Arrow;
