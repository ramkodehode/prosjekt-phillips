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
          <HeadingOne>Visjon</HeadingOne>
          <Paragraph>
            Fremtiden er usikker samtidig full av muligheter. Vi hjelper
            mennesker å finne frem til egne milighetsrom og nå sine mål for
            utdanning og arbeid
          </Paragraph>
        </Vision>
        <Goal>
          <HeadingOne>Mål</HeadingOne>
          <Paragraph>
            Ved å etterleve verdiene våre være en foretrukken karriereveileder
            for unge og vokse kunder samt samarbeidspartnere.
          </Paragraph>
        </Goal>
        <Values>
          <HeadingOne>Verdier</HeadingOne>
          <Paragraph>
            Engasjert; Handler om å møte deg der du er i livet ditt, vise
            interesse, utforske og sammen finne veien videre mot dine mål.
            <Paragraph>
              Kvalitet: Innebærer høy integritet og faglig kompetanse. Våre
              tjenester er i tråd med Nasjonalt kvalitetsrammeverk.
            </Paragraph>
            <Paragraph>
              Trygg: Vil si tillitsbasert samarbeid som støttes av etikk og god
              forretningsskikk.
            </Paragraph>
          </Paragraph>
        </Values>
      </InnerContainer>
    </Container>
  );
};

export default Target;
