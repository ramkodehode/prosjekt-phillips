import React from 'react';
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
} from './Arbeidsgiver.styled';

import Pil from '../veiledning/polygon.png';

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
          <FaseInnerContainer>
            <HeadingTwoFase>Fase 1</HeadingTwoFase>
            <Text>Oppstartsmøte</Text>
          </FaseInnerContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
        </FaseAndArrowContainer>

        <FaseAndArrowContainer>
          <FaseInnerContainer>
            <HeadingTwoFase>Fase 2</HeadingTwoFase>
            <Text>Gjennomføring av karriereveiledning</Text>
            <div>for medarbeidere i omstilling.</div>
          </FaseInnerContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
        </FaseAndArrowContainer>

        <FaseAndArrowContainer>
          <FaseInnerContainer>
            <HeadingTwoFase>Fase 3</HeadingTwoFase>
            <Text>Evaluering.</Text>
          </FaseInnerContainer>
        </FaseAndArrowContainer>
      </FaseContainer>
    </Container>
  );
};

export default Arbeidsgiver;
