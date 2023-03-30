import { Column, Container, NewSection } from "./styles/styledIntro";
import { ContainerPhone } from "./Tjenester";
import {
  ContainerPrice,
  DivPrice,
  TextArbeidsgiver,
  TextTaKontakt,
} from "./pricePage/StyledPrice";
import PriceBoxOne from "./pricePage/PriceBoxOne";
import PriceBoxTwo from "./pricePage/ProceBoxTwo";

const PriceBox = () => {
  return (
    <div>
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
      <TextTaKontakt>For arbeidsgiver</TextTaKontakt>
      <TextArbeidsgiver>
        Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
        gjensidig forventningsavklaring for mål og gjennomføring av programmet.
        Karrierelæringsprogrammet tar utgangspunkt i modellen; Ta kontroll mot
        ny jobb
      </TextArbeidsgiver>
    </div>
  );
};

export default PriceBox;
