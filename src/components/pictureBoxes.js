import styled from "styled-components";
import { Column, Container, NewSection } from "./styles/styledIntro";

import highfive from "./img/highfive.png";
import writing from "./img/writing.png";
import claspedarms from "./img/claspedarms.png";

export const PictureBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: 35px;

  max-width: 50%;

  padding: 0 10px;

  position: relative;
  top: -150px;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const PicBoxes = styled.img`
  width: auto;
  height: 40vh;
  @media only screen and (max-width: 40em) {
    height: 30vh;
    padding: 0 2.5em;
    top: -100px;
    position: relative;
  }
`;

export const PhonePicBox = styled.img`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;
    width: auto;
    height: 30vh;
    padding: 0 2.5em;
    top: -100px;
    position: relative;
  }
`;

const PictureBoxes = () => {
  return (
    <div>
      <Container>
        <NewSection>
          <Column>
            <PictureBoxesContainer>
              <PicBoxes src={writing} alt="writing" />
            </PictureBoxesContainer>
            <PictureBoxesContainer>
              <PicBoxes src={claspedarms} alt="clapsed arms" />
            </PictureBoxesContainer>
            <PictureBoxesContainer>
              <PicBoxes src={highfive} alt="highfive" />
            </PictureBoxesContainer>
          </Column>
        </NewSection>
      </Container>
      <PhonePicBox src={highfive} alt="highfive" />
    </div>
  );
};

export default PictureBoxes;
