import styled from "styled-components";
import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from "./styles/styledIntro";
import { Rectangle } from "./styles/styledVartAnsvar";

import { ImgStudentBehindFence } from "./styles/styledKarriere";
import studentsbehindfence from "./img/studentsbehindfence.png";

export const ContainerVareProgrammer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;

  flex-basis: 100%;
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
`;

export const TextVareProgrammer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 165%;
`;

const Tjenester = () => {
  return (
    <div>
      <TitleVareProgrammer>Våre Tjenester</TitleVareProgrammer>

      <Container>
        <NewSection>
          <Column>
            <ContainerVareProgrammer>
              <UnderTitle>
                <Rectangle />
                Studieveiledning - for deg som er usikker på veien etter
                videregående skole
              </UnderTitle>
              <TextVareProgrammer>
                Karrierelærings programmet gjennomføres ved tre fysiske
                samlinger og består av tre faser. Du starter med å jobbe frem
                din interesseprofil som er utgangspunktet for veien videre.
                Mellom hver samling jobber du med ulike øvelser på vår digitale
                læringsplattform. Du har tett oppfølgling av din
                karriereveileder under hele prosessen.{" "}
              </TextVareProgrammer>
            </ContainerVareProgrammer>
            <ContainerVareProgrammer>
              <UnderTitle>
                <Rectangle />
                Karriereveiledning - for arbeidsgivere og deg som er i
                omstilling.{" "}
              </UnderTitle>
              <TextVareProgrammer>
                Programmet gjennomføres ved seks fysiske samlinger og består av
                tre faser. Du starter med å jobbe frem din kompetanse- og
                verdiprofil. Mellom hver samling jobber du med ulike øvelser på
                vår digitale læringsplattform. Dette foregår med tett
                oppfølgling av din karriereveileder. Programmet er tilrettelagt
                individuelt, for grupper og i kombinasjon av disse. Avhenging av
                om prosessen er avtalt med deg privat, eller din arbeidsgiver.
              </TextVareProgrammer>
            </ContainerVareProgrammer>
          </Column>
        </NewSection>
      </Container>

      <ImgStudentBehindFence
        src={studentsbehindfence}
        alt="Students standing behind a fence"
      />
    </div>
  );
};

export default Tjenester;
