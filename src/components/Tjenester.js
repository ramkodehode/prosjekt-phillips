import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from './styles/styledIntro';
import { Rectangle } from './styles/styledVartAnsvar';

import {
  ContainerPhone,
  ContainerVareProgrammer,
  IMGtjenester,
  TextVareProgrammer,
  TitleVareProgrammer,
} from './styles/styledTjenester';

import seatedstudents from './img/seatedstudent.png';

import undervisning from './img/undervisning.jpg';
import { PicBoxes } from './komIgjen';

const Tjenester = () => {
  return (
    <div>
      <PicBoxes src={undervisning} alt="students in a classroom" />

      <TitleVareProgrammer id="tjenester">Våre Tjenester</TitleVareProgrammer>
      <TextVareProgrammer>
        Vi tilbyr to forskjellige program; Et for unge som står foran valg av
        studie- og yrkesretning, og et for voksne i omstilling. Disse er
        tilrettelagt individuelt, for grupper og i kombinasjonen av fysisk og
        digitale møter.
      </TextVareProgrammer>

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
                <IMGtjenester src="" alt="placeholder" />
              </ContainerVareProgrammer>
            </ContainerPhone>
          </Column>
        </NewSection>
      </Container>
    </div>
  );
};

export default Tjenester;
