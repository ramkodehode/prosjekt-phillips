import React from "react";
import {
  Container,
  Goal,
  HeadingOne,
  InnerContainer,
  Paragraph,
  Values,
  Vision,
} from "./Target.styled";

const Target = () => {
  return (
    <Container>
      <InnerContainer>
        <Vision>
          <HeadingOne>Vision</HeadingOne>
          <Paragraph>
            Fremtiden er usikker og samtidig full av muligheter. Vi hjelper
            mennesker å finne frem til egne milighetsrom og nå sine mål for
            utdanning og arbeid
          </Paragraph>
        </Vision>
        <Goal>
          <HeadingOne>Mål</HeadingOne>
          <Paragraph>
            Ved å etterleve verdiene våre være en foretrukken karriereveileder
            for unge og voksne kunder samt samarbeidspartnere.
          </Paragraph>
        </Goal>
        <Values>
          <HeadingOne>Verdier</HeadingOne>
          <Paragraph>
            Engasjert: Handler om å møte deg der du er i livet ditt, vise
            interesse, utforske og sammen finne veien videre mot dine mål.
          </Paragraph>
          <Paragraph>
            Kvalitet: Høy integritet og faglig kompetanse. Våre tjenester er i
            tråd med Nasjonalt kvalitetsrammeverk.
          </Paragraph>
          <Paragraph>
            {" "}
            Trygg: Samarbeid basert på gjensidig tillit, etikk og god
            forretningsskikk.
          </Paragraph>
        </Values>
      </InnerContainer>
    </Container>
  );
};

export default Target;
