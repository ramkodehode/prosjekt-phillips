import React from "react";
import {
  Container,
  FaseContainer,
  HeadingOne,
  HeadingTextContainer,
  HeadingTwoFase,
  Text,
  Arrow,
  ArrowContainer,
  FaseInnerContainer,
  FaseAndArrowContainer,
} from "./Arbeidsgiver.styled";

import Pil from "../veiledning/polygon.png";

const Arbeidsgiver = () => {
  return (
    <Container>
      <HeadingTextContainer>
        <HeadingOne>For Arbeidsgivere</HeadingOne>
        <Text>
          Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
          gjensidig forventningsavklaring for mål og gjennomføring av
          veiledningsprogrammet.
        </Text>
      </HeadingTextContainer>

      <FaseContainer>
        <FaseAndArrowContainer>
          <HeadingTwoFase>Fase 1</HeadingTwoFase>
          <FaseInnerContainer>
            <Text>Oppstartsmøte</Text>
            <ArrowContainer>
              <Arrow src={Pil} alt=""></Arrow>
            </ArrowContainer>
          </FaseInnerContainer>
        </FaseAndArrowContainer>

        <FaseAndArrowContainer>
          <HeadingTwoFase>Fase 2</HeadingTwoFase>
          <FaseInnerContainer>
            <Text>
              Gjennomføring av karriereveiledning for medarbeidere i omstilling.
            </Text>
            <ArrowContainer>
              <Arrow src={Pil} alt=""></Arrow>
            </ArrowContainer>
          </FaseInnerContainer>
        </FaseAndArrowContainer>

        <FaseAndArrowContainer>
          <HeadingTwoFase>Fase 3</HeadingTwoFase>
          <FaseInnerContainer>
            <Text>Evaluering.</Text>
          </FaseInnerContainer>
        </FaseAndArrowContainer>
      </FaseContainer>
    </Container>
  );
};

export default Arbeidsgiver;
