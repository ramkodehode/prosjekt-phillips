import styled from "styled-components";

import undervisningOP from "./img/undervisningOP.png";

export const KomIgjenText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;

  @media only screen and (max-width: 40em) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 2400px) {
    font-size: 7rem;
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
  width: 100%;
  z-index: 0;

  top: -100px;

  @media only screen and (max-width: 40em) {
  }
`;

export const DivImg = styled.div`
  position: relative;
  text-align: center;

  padding-bottom: 100px;
`;

const KomIgjen = () => {
  return (
    <div>
      <DivImg>
        <KomIgjenText>Så la oss komme i gang!</KomIgjenText>
        <PicBoxes src={undervisningOP} alt="clapsed arms" />
      </DivImg>
    </div>
  );
};

export default KomIgjen;
