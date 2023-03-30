import styled from "styled-components";

export const ArrowLine = styled.div`
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

  background-color: black;

  transform: rotate(45deg);

  right: 58px;
  top: 30px;
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
`;

export const ArrowDiv = styled.div`
  display: flex;

  justify-content: center;

  padding: 80px 100px;

  position: relative;

  left: 20px;
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
