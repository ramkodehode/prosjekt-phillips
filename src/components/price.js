import styled from "styled-components";
import { Column, Container, NewSection } from "./styles/styledIntro";
import priceicon from "./img/priceicon.png";
import iconprice from "./img/iconprice.png";

export const BoxPrice = styled.div`
  height: 30em;
  width: 20em;
  border: 1.5px solid #fe8900;
  padding: 20px;
  background-color: white;
`;

export const ContainerPrice = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5em;

  text-align: center;
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  align-items: center;
  justify-content: space-between;

  font-family: "Poppins";
  font-size: 1.2rem;

  top: -300px;
`;

export const TextTaKontakt = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-size: 1.2em;
  margin: 0 auto;

  align-items: center;

  border-bottom: 1.5px solid #fe8900;

  width: 50%;
  position: relative;
  top: -300px;
`;

export const ImgPrice = styled.img`
  height: 5em;
  width: auto;
  padding-top: 30px;
`;

export const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fe8900;
`;

export const ContainerGroup = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 0%;
  padding: 10px;

  flex-basis: 100%;
  align-items: center;
`;

export const TextYellow = styled.h1`
  color: #fe8900;
  font-weight: 400;
`;

const PriceBox = () => {
  return (
    <div>
      <DivPrice>
        <Container>
          <NewSection>
            <Column>
              {/* Left box */}
              <ContainerPrice>
                <BoxPrice>
                  <ImgPrice src={priceicon} alt="icon" />
                  <h2>Priser</h2>
                  <TextYellow>Studier videre</TextYellow>
                  <p>3 samlinger hvor en hver økt varer 2 timer</p>
                  <p>Øvelser mellom hver økt</p>
                  <p>
                    Individuell oppmerksomhet på din <br /> karriereretning
                  </p>
                  <p>Spesifikke råd tilpasset din situasjon</p>
                  <Underline />
                  <Column>
                    <ContainerGroup>
                      <p>Individuelt</p>
                      <p>6995,-</p>
                    </ContainerGroup>
                    <ContainerGroup>
                      <p>Grupper</p>
                      <p>4995,-</p>
                    </ContainerGroup>
                  </Column>
                </BoxPrice>
              </ContainerPrice>
              {/* Right box */}
              <ContainerPrice>
                <BoxPrice>
                  <ImgPrice src={iconprice} alt="icon" />
                  <h2>Priser</h2>
                  <TextYellow>Omstilling</TextYellow>
                  <p>6-9 samlinger hvor en hver økt varer 2 timer </p>
                  <p>Øvelser mellom hver økt </p>{" "}
                  <p>
                    Individuell oppmerksomhet på din <br /> karriereretning
                  </p>{" "}
                  <p>Spesifikke råd tilpasset din situasjon</p>
                  <Underline />
                  <Column>
                    <ContainerGroup>
                      <p>Individuelt</p>
                      <p>6995,-</p>
                    </ContainerGroup>
                    <ContainerGroup>
                      <p>Grupper</p>
                      <p>4995,-</p>
                    </ContainerGroup>
                  </Column>
                </BoxPrice>
              </ContainerPrice>
            </Column>
          </NewSection>
        </Container>
      </DivPrice>
      <TextTaKontakt>
        Ta kontakt dersom du er en arbeidsgiver og ønsker et program
      </TextTaKontakt>
    </div>
  );
};

export default PriceBox;
