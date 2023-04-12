import styled from "styled-components";

export const BigBox = styled.div`
  width: auto;
  height: 35rem;
  margin: 0 auto;
  z-index: -1;

  background: #fbd19c;
  position: relative;

  @media only screen and (max-width: 40em) {
  }
`;

export const VartAnsvarContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: 150px 50px;

  max-width: 50%;

  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 165%;

  @media only screen and (max-width: 40em) {
    margin: 50px 20px;
    max-width: 100%;
  }
`;

export const PicBox = styled.div`
  background: #ffcb8f;
  width: 23em;
  height: 22em;
  z-index: -1;
  position: relative;

  right: 25px;
  @media only screen and (max-width: 40em) {
    display: none;
  }
  @media only screen and (min-width: 2400px) {
    width: 77em;
    height: 75em;
  }
`;

export const PhonePicBox = styled.div`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;

    background: #ffcb8f;
    width: 13em;
    height: 13em;
    z-index: -1;
    position: relative;
    margin: 0 auto;

    align-items: center;
  }
`;

export const SittingStudents = styled.img`
  width: auto;
  height: 70vh;
  padding: 2rem;

  position: relative;

  @media only screen and (max-width: 40em) {
  }
  @media only screen and (min-width: 2400px) {
    padding: 5rem;
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
  height: 50px;
  float: left;
  margin-right: 15px;

  @media only screen and (max-width: 40em) {
    height: 30px;
  }
  @media only screen and (min-width: 2400px) {
    height: 100%;
  }
`;
