import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from "./styles/styledIntro";
import { Rectangle } from "./styles/styledVartAnsvar";

import {
  BoxTjenester,
  ContainerPhone,
  ContainerVareProgrammer,
  IMGtjenester,
  IntroVareProgrammer,
  TextVareProgrammer,
  TitleVareProgrammer,
} from "./styles/styledTjenester";

import seatedstudents from "./img/seatedstudent.png";
import styled from "styled-components";
import undervisning from "./img/undervisning.jpg";
import { PicBoxes } from "./komIgjen";

import styled from "styled-components";

export const IMGphoneTjenester = styled.img`
  display: none;

  @media only screen and (max-width: 40em) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;

    padding: 50px;
  }
`;

const Tjenester = () => {
  return (
    <div>
      <PicBoxes src={undervisning} alt="students in a classroom" />
      <TitleVareProgrammer id="tjenester">Våre Tjenester</TitleVareProgrammer>
      <IntroVareProgrammer>
        Vi tilbyr to forskjellige program; Et for unge som står foran valg av
        studie- og yrkesretning, og et for voksne i omstilling. Disse er
        tilrettelagt individuelt, for grupper og i kombinasjonen av fysisk og
        digitale møter.
      </IntroVareProgrammer>
      <Container>
        <NewSection>
          <Column>
            <ContainerPhone>
              <ContainerVareProgrammer>
                <UnderTitle>
                  <Rectangle />
                  Studieveiledning – Mitt studievalg
                </UnderTitle>
                <TextVareProgrammer>
                  Programmet gjennomføres i tre faser. Mellom samlingene jobber
                  du med øvelser i vår digitale karrierelæringsplattform. Husk
                  valget er ditt, det er du som har «fasiten» ingen andre. Det
                  handler ikke om hva du skal bli, men mer om hvem du vil være.
                  Vær nysgjerrig på egne interesser og verdier, høyst sannsynlig
                  oppdager du nye. Utforsk mulighetene dine. Fremtiden kan
                  fremstå usikker og det fine med det er at der ligger
                  mulighetene.
                </TextVareProgrammer>
              </ContainerVareProgrammer>
              <IMGphoneTjenester src={seatedstudents} alt="studenter" />

              <ContainerVareProgrammer>
                <BoxTjenester>
                  <IMGtjenester src={seatedstudents} alt="studenter" />
                </BoxTjenester>
              </ContainerVareProgrammer>
            </ContainerPhone>
          </Column>
        </NewSection>
      </Container>

      <Container>
        <NewSection>
          <Column>
            <ContainerPhone>
              <ContainerVareProgrammer>
                <BoxTjenester>
                  <IMGtjenester src="" alt="placeholder" />
                </BoxTjenester>
              </ContainerVareProgrammer>

              <ContainerVareProgrammer>
                <UnderTitle>
                  <Rectangle />
                  Karriereveiledning - Ta kontroll mot nye muligheter
                </UnderTitle>
                <TextVareProgrammer>
                  Programmet består av tre faser. Ny jobb er ditt ansvar, vi
                  bidrar til at du kommer dit. Positiv usikkerhet er et av våre
                  perspektiv. Fremtiden kan fremstå usikker og det fine med det
                  er at der ligger alle mulighetene. Prosessen kan være avtalt
                  med deg privat, eller din arbeidsgiver som resultat av en
                  omstillingsprosess.
                </TextVareProgrammer>
              </ContainerVareProgrammer>
            </ContainerPhone>
          </Column>
        </NewSection>
      </Container>
      <IMGphoneTjenester src="" alt="Placeholder" />
    </div>
  );
};

export default Tjenester;
