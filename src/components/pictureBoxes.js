import styled from "styled-components";
// import { Column, Container, NewSection } from "./styles/styledIntro";

import studensitting from "./img/studensitting.png";

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
  display: block;
  width: auto;
  height: 30vh;

  top: -100px;
  position: relative;
  border: 6px solid #fe8900;

  margin: 0 auto;

  align-items: center;

  width: auto;
  height: 40vh;
  @media only screen and (max-width: 40em) {
    /* height: 30vh;
    padding: 0 2.5em;
    top: -100px;
    position: relative; */
    display: none;
  }
`;

export const PhonePicBox = styled.img`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;
    width: auto;
    height: 20vh;

    top: -100px;
    position: relative;
    border: 6px solid #fe8900;

    margin: 0 auto;

    align-items: center;
  }
`;

const PictureBoxes = () => {
  return (
    <div>
      {/* <Container>
        <NewSection>
          <Column>
            <PictureBoxesContainer>
              <PicBoxes src={writing} alt="writing" />
            </PictureBoxesContainer>
            <PictureBoxesContainer>
              <PicBoxes src={studensitting} alt="clapsed arms" />
            </PictureBoxesContainer>
            <PictureBoxesContainer>
              <PicBoxes src={highfive} alt="highfive" />
            </PictureBoxesContainer>
          </Column>
        </NewSection>
      </Container> */}
      <PicBoxes src={studensitting} alt="clapsed arms" />
      <PhonePicBox src={studensitting} alt="highfive" />
    </div>
  );
};

export default PictureBoxes;
