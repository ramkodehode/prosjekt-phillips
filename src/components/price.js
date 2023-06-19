import { Column, Container, NewSection } from "./styles/styledIntro";

import { ContainerPrice, DivPrice } from "./pricePage/StyledPrice";
import PriceBoxOne from "./pricePage/PriceBoxOne";
import PriceBoxTwo from "./pricePage/ProceBoxTwo";

import { ContainerPhone } from "./styles/styledTjenester";

import Arbeidsgiver from "./arbeidsgiver/Arbeidsgiver";

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
    </div>
  );
};

export default PriceBox;
