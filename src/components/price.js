import { Column, Container, NewSection } from "./styles/styledIntro";

import { ContainerPrice, DivPrice } from "./pricePage/StyledPrice";
import PriceBoxOne from "./pricePage/PriceBoxOne";
import PriceBoxTwo from "./pricePage/ProceBoxTwo";

import { ContainerPhone } from "./styles/styledTjenester";

import styled from "styled-components";
import Arbeidsgiver from "./arbeidsgiver/Arbeidsgiver";

export const UnderTitleArbeidsgiver = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;

  color: #e5701b;

  @media only screen and (max-width: 40em) {
    font-size: 1.2rem;
    text-align: center;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 5rem;
  }
`;

export const Arrows = styled.div`
  font-size: 5rem;
  padding: 1rem 2rem;

  @media only screen and (max-width: 40em) {
    text-align: center;
  }
  @media only screen and (min-width: 2400px) {
    font-size: 20rem;
  }
`;

const PriceBox = () => {
  return (
    <div id="priser">
      <DivPrice>
        <Container>
          <NewSection>
            <Column>
              <ContainerPhone>
                {/* Left box */}
                <ContainerPrice>
                  <PriceBoxOne />
                </ContainerPrice>
                {/* Right box */}
                <ContainerPrice>
                  <PriceBoxTwo />
                </ContainerPrice>
              </ContainerPhone>
            </Column>
          </NewSection>
        </Container>
      </DivPrice>
      <Arbeidsgiver />
      {/* <DivPhoneArbeidsgiver>
        <TextTaKontakt>For arbeidsgiver</TextTaKontakt>
        <TextArbeidsgiver>
          Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
          gjensidig forventingsavklaring for mål og gjennomføring av programmet.
          Karrierelæringsprogrammet tar utgangspunkt i modellen; Ta kontroll mot
          ny jobb.
          <UnderTitleArbeidsgiver>Fase 1</UnderTitleArbeidsgiver>
          Oppstartsmøte
          <Arrows> ↓</Arrows>
          <UnderTitleArbeidsgiver>Fase 2</UnderTitleArbeidsgiver>
          Gjennomføring av karriereveiledning for medarbeidere.
          <Arrows> ↓</Arrows>
          <UnderTitleArbeidsgiver>Fase 3</UnderTitleArbeidsgiver>
          Evaluering.
        </TextArbeidsgiver>
      </DivPhoneArbeidsgiver> */}
    </div>
  );
};

export default PriceBox;
