import styled from 'styled-components';
import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from './styles/styledIntro';
import { Rectangle } from './styles/styledVartAnsvar';

import { ImgStudentBehindFence } from './styles/styledKarriere';
import studentsbehindfence from './img/studentsbehindfence.png';

export const ContainerPhone = styled.section`
  display: flex;
  @media only screen and (max-width: 40em) {
    display: block;
    max-width: 90%;
  }
`;

export const ContainerVareProgrammer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;

  flex-basis: 100%;
  @media only screen and (max-width: 40em) {
    margin-left: 25px;
    padding: 0px;

    position: relative;

    top: 100px;

    font-size: 0.9em;
  }
`;

export const TitleVareProgrammer = styled.h1`
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;

  @media only screen and (max-width: 40em) {
    font-size: 1.2em;
    position: relative;
    top: 100px;
  }
`;

export const TextVareProgrammer = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 165%;
`;

const Tjenester = () => {
  return (
    <div id="tjenester">
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
                  Programmet gjennomføres med utgangspunkt i tre faser. Vi
                  starter med forventningsavklaring, blir bedre kjent med deg;
                  historien din, hvor du er nå, og litt om tankene dine for
                  fremtiden. Du starter med å utforske interessene dine som er
                  utgangspunktet for veien videre. Mellom hver samling jobber du
                  med ulike øvelser i vår digitale karrierelæringsplattform. Du
                  får tett oppfølging av din karriereveileder under hele
                  prosessen. Husk valget er ditt, det er du som har «fasiten»
                  ingen andre. Det handler heller ikke om hva du skal bli, men
                  mer om hvem du vil være. Lev livet ditt her og nå! Vær
                  nysgjerrig på egne interesser, høyst sannsynlig finner du noen
                  du ikke ante du hadde. Reflektere over verdiene, og utforsk
                  mulighetene dine . Fremtiden kan fremstå usikker og det fine
                  med det er at der ligger mulighetene.
                </TextVareProgrammer>
              </ContainerVareProgrammer>
              <ContainerVareProgrammer>
                <UnderTitle>
                  <Rectangle />
                  Karriereveiledning – for arbeidsgivere og deg som er i
                  omstilling Ta kontroll mot nye jobb!
                </UnderTitle>
                <TextVareProgrammer>
                  Programmet er utviklet med utgangspunkt i tre faser. Du
                  starter med å jobbe frem din kompetanse- og verdiprofil.
                  Mellom hver samling jobber du med ulike øvelser. Dette foregår
                  med tett oppfølging av din karriereveileder, som er
                  tilgjengelig mellom øvelsene. Programmet er tilrettelagt for
                  fysiske og digitale samlinger, individuelt, for grupper og i
                  kombinasjon av disse. Vi vektlegger verdien av det fysiske
                  møte og tilliten mellom deg og din karriereveileder. I tillegg
                  er vi tydelig på at det er du selv som skaffer deg ny jobb, vi
                  bidrar til at du kommer dit. Prosessen kan være avtalt med deg
                  privat, eller din arbeidsgiver som resultat av en
                  omstillingsprosess. Positiv usikkerhet er et av våre
                  perspektiv - fremtiden kan fremstå usikker og det fine med det
                  er at der ligger alle mulighetene.
                </TextVareProgrammer>
              </ContainerVareProgrammer>
            </ContainerPhone>
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
