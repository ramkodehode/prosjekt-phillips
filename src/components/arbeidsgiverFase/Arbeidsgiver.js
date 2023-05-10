import React from 'react';
import {
  Container,
  FaseContainer,
  HeadingOne,
  HeadingTextContainer,
  HeadingThree,
  HeadingTwoFase,
  Text,
  Arrow,
  ArrowContainer,
  FaseInnerContainer,
} from './Arbeidsgiver.styled';

import Pil from '../veiledning/polygon.png';

const Arbeidsgiver = () => {
  return (
    <Container>
      <HeadingTextContainer>
        <HeadingOne>For Arbeidsgiver</HeadingOne>
        <Text>
          Etter inngått avtale starter vi med oppstartsmøte hvor vi foretar en
          gjensidig forventingsavklaring for mål og gjennomføring av programmet.
          Karrierelæringsprogrammet tar utgangspunkt i modellen; Ta kontroll mot
          ny jobb.
        </Text>
      </HeadingTextContainer>

      <FaseContainer>
        <FaseInnerContainer>
          <HeadingTwoFase>Fase 1</HeadingTwoFase>
          <Text>Oppstartsmøte</Text>
        </FaseInnerContainer>
        <ArrowContainer>
          <Arrow src={Pil}></Arrow>
        </ArrowContainer>
        <FaseInnerContainer>
          <HeadingTwoFase>Fase 2</HeadingTwoFase>
          <Text>Gjennomføring av karriereveiledning for medarbeidere.</Text>
        </FaseInnerContainer>
        <ArrowContainer>
          <Arrow src={Pil}></Arrow>
        </ArrowContainer>
        <FaseInnerContainer>
          <HeadingTwoFase>Fase 3</HeadingTwoFase>
          <Text>Evaluering.</Text>
        </FaseInnerContainer>
      </FaseContainer>
    </Container>
  );
};

export default Arbeidsgiver;
