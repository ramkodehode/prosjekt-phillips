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

  width: 20%;
  position: relative;
  top: -300px;

  @media only screen and (max-width: 40em) {
    width: 50%;
  }
`;

export const TextArbeidsgiver = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-size: 1.2em;
  margin: 0 auto;
  padding: 20px;

  align-items: center;

  width: 70%;
  position: relative;
  top: -300px;
`;

export const ImgPrice = styled.img`
  height: 5em;
  width: auto;
  padding-top: 20px;
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
                  <TextYellow>Studieveiledning</TextYellow>
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
                      <p>6570,-</p>
                    </ContainerGroup>
                    <ContainerGroup>
                      <p>Grupper</p>
                      <p>4570,-</p>
                    </ContainerGroup>
                  </Column>
                </BoxPrice>
              </ContainerPrice>
              {/* Right box */}
              <ContainerPrice>
                <BoxPrice>
                  <ImgPrice src={iconprice} alt="icon" />
                  <h2>Priser</h2>
                  <TextYellow>Karriereveiledning</TextYellow>
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
                      <p>6 timer 7200,- </p>
                      <p>12 timer 14.400,-</p>
                      <p>18 timer 21.600,-</p>
                    </ContainerGroup>
                    <ContainerGroup>
                      <p>Grupper</p>
                      <p>På forespørsel</p>
                    </ContainerGroup>
                  </Column>
                </BoxPrice>
              </ContainerPrice>
            </Column>
          </NewSection>
        </Container>
      </DivPrice>
      <TextTaKontakt>For arbeidsgiver</TextTaKontakt>
      <TextArbeidsgiver>
        Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
        gjensidig forventningsavklaring for mål og gjennomføring av programmet.
        Karrierelæringsprogrammet tar utgangspunkt i modellen; Ta kontroll mot
        ny jobb
      </TextArbeidsgiver>
      <p></p>
    </div>
  );
};

export default PriceBox;
