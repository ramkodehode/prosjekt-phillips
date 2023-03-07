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

  justify-content: center;

  padding: 0 10px;

  position: relative;
  top: -200px;

  @media only screen and (max-width: 40em) {
  }
`;

export const PicBoxes = styled.img`
  width: auto;
  height: 40vh;
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
    </div>
  );
};

export default PictureBoxes;