import React from 'react';
import {
  Container,
  Goal,
  HeadingOne,
  InnerContainer,
  Paragraph,
  Values,
  Vision,
} from './Target.styled';

const Target = () => {
  return (
    <Container>
      <InnerContainer>
        <Vision>
          <HeadingOne>Vision</HeadingOne>
          <Paragraph>
            Fremtiden er usikker samtidig full av muligheter. Vi hjelper
            mennesker å finne frem til egne milighetsrom og nå sine mål for
            utdanning og arbeid
          </Paragraph>
        </Vision>
        <Goal>
          <HeadingOne>Mål</HeadingOne>
          <Paragraph>
            Mål; Ved å etterleve verdiene våre være en foretrukken
            Karriereveileder for unge og vokse kunder samt samarbeidspartnere.
          </Paragraph>
        </Goal>
        <Values>
          <HeadingOne>Verdier</HeadingOne>
          <Paragraph>
            Verdier er; Engasjert; Handler om å møte deg der du er i livet ditt,
            vise interesse, utforske og sammen finne veien videre mot dine
            mål.Kvalitet; Høy integritet og faglig kompetanse. Våre tjenester er
            i tråd med Nasjonalt kvalitetsrammeverk. Trygg; Tillitsbasert
            samarbeid og støttes av etikk og god forretningsskikk.
          </Paragraph>
        </Values>
      </InnerContainer>
    </Container>
  );
};

export default Target;
