import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from "./styles/styledIntro";
import { Rectangle } from "./styles/styledVartAnsvar";

import {
  ContainerPhone,
  ContainerVareProgrammer,
  TextVareProgrammer,
  TitleVareProgrammer,
} from "./styles/styledTjenester";

import styled from "styled-components";

import undervisning from "./img/undervisning.jpg";
import seatedstudents from "./img/seatedstudent.png";

import { PicBoxes } from "./komIgjen";

export const IMGcomputer = styled.img`
  width: auto;
  height: 50vh;

  margin-left: auto;
  margin-right: auto;
  border: 5px solid orange;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const IMGtjenester = styled.img`
  height: 70%;
  width: 70%;
`;

const Tjenester = () => {
  return (
    <div id="tjenester">
      <PicBoxes src={undervisning} alt="student on a laptop" />
      <TitleVareProgrammer>Våre Tjenester</TitleVareProgrammer>

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
                <IMGtjenester src={seatedstudents} alt="studenter" />
              </ContainerVareProgrammer>

              <ContainerVareProgrammer>
                <UnderTitle>
                  <Rectangle />
                  Karriereveiledning - Ta kontroll mot ny jobb
                </UnderTitle>
                <TextVareProgrammer>
                  Programmet består av tre faser. Ny jobb er ditt ansvar, vi
                  bidrar til at du kommer dit. Positiv usikkerhet er et av våre
                  perspektiv. Fremtiden kan fremstå usikker og det fine med det
                  er at der ligger alle mulighetene. Prosessen kan være avtalt
                  med deg privat, eller din arbeidsgiver som resultat av en
                  omstillingsprosess.
                </TextVareProgrammer>
                <IMGtjenester src="" alt="placeholder" />
              </ContainerVareProgrammer>
            </ContainerPhone>
          </Column>
        </NewSection>
      </Container>

      {/* <ImgStudentBehindFence
        src={studentsbehindfence}
        alt="Students standing behind a fence"
      /> */}
    </div>
  );
};

export default Tjenester;
