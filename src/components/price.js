import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from './styles/styledIntro';

import {
  ContainerPrice,
  DivPhoneArbeidsgiver,
  DivPrice,
  TextArbeidsgiver,
  TextTaKontakt,
} from './pricePage/StyledPrice';
import PriceBoxOne from './pricePage/PriceBoxOne';
import PriceBoxTwo from './pricePage/ProceBoxTwo';

import ArrowTwo from './styles/arrowTwo';
import { ContainerPhone } from './styles/styledTjenester';

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
      <DivPhoneArbeidsgiver>
        <TextTaKontakt>For arbeidsgiver</TextTaKontakt>
        <TextArbeidsgiver>
          Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
          gjensidig forventingsavklaring for mål og gjennomføring av programmet.
          Karrierelæringsprogrammet tar utgangspunkt i modellen; Ta kontroll mot
          ny jobb.
          <UnderTitle>Fase 1</UnderTitle>
          Oppstartsmøte
          <ArrowTwo />
          <UnderTitle>Fase 2</UnderTitle>
          Gjennomføring av karriereveiledning for medarbeidere, statusmøter
          følger fase 1, fase 2 og fase 3.
          <ArrowTwo />
          <UnderTitle>Fase 3</UnderTitle>
          Evaluering.
        </TextArbeidsgiver>
      </DivPhoneArbeidsgiver>
    </div>
  );
};

export default PriceBox;
