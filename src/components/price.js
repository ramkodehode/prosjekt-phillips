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
    </div>
  );
};

export default PriceBox;
