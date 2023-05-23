import styled from "styled-components";

import computer from "./img/computer.png";

export const KomIgjenText = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: black;
  z-index: 1;

  @media only screen and (max-width: 40em) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 2400px) {
    font-size: 7rem;
    top: 40%;
  }
`;

export const OpacityBox = styled.div`
  opacity: 0.5;

  padding: 6rem 13rem;
  background-color: white;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 40em) {
    padding: 2.5rem 7rem;
  }

  @media only screen and (min-width: 2400px) {
    padding: 20rem 45rem;
    top: 45%;
  }
`;

export const PictureBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 50px;

  position: relative;
  top: -150px;

  margin: 0 auto;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const PicBoxes = styled.img`
  height: 98vh;
  width: auto;

  margin-bottom: 5rem;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 40em) {
    height: 25vh;
    padding: 0;
  }

  @media only screen and (min-width: 1440px) {
    height: 72vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 62vh;
  }
`;

export const DivImg = styled.div`
  position: relative;
  text-align: center;

  padding-bottom: 100px;
`;

export const IMGlaptop = styled.img`
  height: 80vh;
  width: auto;

  display: block;
  margin-left: auto;
  margin-right: auto;

  padding-bottom: 100px;

  margin: 0 auto;

  z-index: -1;

  @media only screen and (max-width: 40em) {
    height: 30vh;
    padding-bottom: 0;
  }
`;

const KomIgjen = () => {
  return (
    <div>
      <DivImg>
        <OpacityBox />
        <KomIgjenText>Så la oss komme i gang!</KomIgjenText>

        <IMGlaptop src={computer} alt="person on laptop" />
      </DivImg>
    </div>
  );
};

export default KomIgjen;
