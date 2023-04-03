import styled from "styled-components";
import Arrow from "./styles/arrow";
import PriceBox from "./price";
import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from "./styles/styledIntro";
import PriceBoxOne from "./pricePage/PriceBoxOne";
import PriceBoxTwo from "./pricePage/ProceBoxTwo";
import { TextArbeidsgiver, TextTaKontakt } from "./pricePage/StyledPrice";
import ArrowTwo from "./styles/arrowTwo";
import { ContainerPhone } from "./styles/styledTjenester";

export const BoxVeiledning = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: 86rem;

  margin: 0 auto;

  position: relative;

  z-index: -1;

  background-color: #fbd19c;

  flex-basis: 100%;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 40em) {
    height: 312rem;
  }
`;

export const ContainerVeiledning = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 150px;

  font-family: "Poppins";
  font-size: 1.2em;
`;

export const NotDisplayed = styled.section`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
  }
`;

const Veiledning = () => {
  return (
    <div>
      <BoxVeiledning>
        <Container>
          <NewSection>
            <Column>
              <ContainerPhone>
                {/* Left side */}
                <ContainerVeiledning>
                  <h2>Studieveiledning</h2>
                  {/* First Phase box */}
                  <UnderTitle>Fase 1</UnderTitle>
                  <p>Utforsk mine interesser</p>
                  <ul>
                    <li>Interessespørsmål</li>

                    <li>Interessebilder</li>
                    <li>Strukturert dybdeintervju</li>
                    <li>Interesseprofil</li>
                  </ul>
                  <Arrow />
                  {/* Second Phase box */}
                  <UnderTitle>Fase 2</UnderTitle>
                  <p>Utforske mine muligheter​</p>
                  <ul>
                    <li>Undersøke ulike studie- og yrkesretninger​</li>
                    <li>Velge bort</li>
                    <li>Velge</li>
                    <li>Mitt mulighetsrom</li>
                  </ul>
                  <Arrow />
                  {/* Third Phase box */}
                  <UnderTitle>Fase 3</UnderTitle>
                  <p>Utforske mitt mulighetsrom ​</p>
                  <ul>
                    <li>Definere mine vurderingskriterier​</li>
                    <li>Definere mine tre alternative valg​</li>
                    <li>Mitt valg ​</li>
                  </ul>

                  {/* This is only displayed on phone: */}
                  <NotDisplayed>
                    <PriceBoxOne />
                  </NotDisplayed>
                </ContainerVeiledning>
                {/* The above only displayed on phone */}

                {/* Right side */}
                <ContainerVeiledning>
                  <h2>Karriereveiledning</h2>
                  {/* First Phase box */}
                  <UnderTitle>Fase 1</UnderTitle>
                  <p>Utforske meg selv​</p>
                  <ul>
                    <li>Personlige egenskaper og styrker​</li>
                    <li>Kompetanser​</li>
                    <li>Verdier​</li>
                    <li>Interesser​</li>
                    <li>Definere mål</li>
                  </ul>
                  <Arrow />
                  {/* Second Phase box */}
                  <UnderTitle>Fase 2</UnderTitle>
                  <p>Utforske mine muligheter​</p>
                  <ul>
                    <li>Mitt marked/mulighetsrom​</li>
                    <li>Mine verktøy ​</li>
                    <li>Situasjon, atferd, resultat - SAR​</li>
                    <li>Egen profil – ønsket rolle​</li>
                    <li>Handlingsplan</li>
                  </ul>
                  <Arrow />
                  {/* Third Phase box */}
                  <UnderTitle>Fase 3</UnderTitle>
                  <p>Ta kontroll</p>
                  <ul>
                    <li>Trene på bruk av mine verktøy​</li>
                    <li>Ta initiativ og ansvar​</li>
                    <li>Kommunisere</li>
                    <li>Forhandle</li>
                  </ul>

                  {/* This is only displayed on phone: */}
                  <NotDisplayed>
                    <PriceBoxTwo />
                  </NotDisplayed>
                  {/* The above only displayed on phone */}
                </ContainerVeiledning>
              </ContainerPhone>
            </Column>
          </NewSection>
        </Container>
        {/* Only displayed on phone */}
        <NotDisplayed>
          <TextTaKontakt>For arbeidsgiver</TextTaKontakt>
          <TextArbeidsgiver>
            Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
            gjensidig forventingsavklaring for mål og gjennomføring av
            programmet. Karrierelæringsprogrammet tar utgangspunkt i modellen;
            Ta kontroll mot ny jobb.
          </TextArbeidsgiver>

          <UnderTitle>Fase 1</UnderTitle>
          <TextArbeidsgiver>Oppstartsmøte </TextArbeidsgiver>
          <ArrowTwo />
          <UnderTitle>Fase 2</UnderTitle>
          <TextArbeidsgiver>
            Gjennomføring av karriereveiledning for medarbeidere, statusmøter
            følger fase 1, fase 2 og fase 3.{" "}
          </TextArbeidsgiver>
          <ArrowTwo />
          <UnderTitle>Fase 3</UnderTitle>
          <TextArbeidsgiver> Evaluering.</TextArbeidsgiver>
        </NotDisplayed>
        {/* Above is only displayed on phone */}
      </BoxVeiledning>

      <PriceBox />
    </div>
  );
};

export default Veiledning;
