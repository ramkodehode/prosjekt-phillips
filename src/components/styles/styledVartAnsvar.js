import styled from "styled-components";

export const BigBox = styled.div`
  width: auto;
  height: 35rem;
  margin: 0 auto;
  z-index: -1;

  background: #fbd19c;
  position: relative;
  top: -150px;

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

export const VartAnsvarContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-left: 50px;

  max-width: 50%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 165%;
`;

export const PicBox = styled.div`
  background: #e9a75a;
  width: 26em;
  height: 25em;
  z-index: -1;
  position: relative;
  top: 120px;
  right: 25px;
  @media only screen and (max-width: 40em) {
  }
`;

export const SittingStudents = styled.img`
  width: auto;
  height: 80vh;
  top: 20px;
  left: 30px;
  position: relative;
`;

export const Rectangle = styled.div`
  background: #e4973c;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 7px;
  height: 80px;
  float: left;
  margin-right: 15px;
`;
