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

  @media only screen and (max-width: 40em) {
    margin-left: 25px;
    max-width: 80%;
  }
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
    display: none;
  }
`;

export const PhonePicBox = styled.div`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;

    background: #e9a75a;
    width: 13em;
    height: 13em;
    z-index: -1;
    position: relative;
    margin: 0 15%;
  }
`;

export const SittingStudents = styled.img`
  width: auto;
  height: 80vh;
  padding: 30px;
  position: relative;

  @media only screen and (max-width: 40em) {
  }
`;

export const PhoneSittingStudents = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    width: auto;
    height: 30vh;
    position: relative;
    padding: 15px;
  }
`;

export const Rectangle = styled.div`
  background: #e4973c;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 7px;
  height: 80px;
  float: left;
  margin-right: 15px;

  @media only screen and (max-width: 40em) {
  }
`;
