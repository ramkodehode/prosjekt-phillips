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
  IMGphoneTjenester,
  IMGtjenester,
  IntroVareProgrammer,
  TextVareProgrammer,
  TitleVareProgrammer,
} from "./styles/styledTjenester";

import seatedstudents from "./img/seatedstudent.png";
import undervisning from "./img/undervisning.jpg";
import trudestudent from "./img/trudestudent.png";
import { PicBoxes } from "./komIgjen";

const Tjenester = () => {
  return (
    <div>
      <PicBoxes src={undervisning} alt="students in a classroom" />
      <TitleVareProgrammer id="tjenester">Våre Tjenester</TitleVareProgrammer>
      <IntroVareProgrammer>
        Vi tilbyr to typer Veiledningsprogram: <br /> Et for unge som står foran
        valg av studie- og yrkesretning, og et for voksne i omstilling.
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
                  Veiledningsprogrammet gjelder for deg som har fylt 18 år og
                  gjennomføres i tre faser. Mellom samlingene jobber du med
                  øvelser i vår digitale karrierelæringsplattform. Husk
                  studievalget er ditt, det er du som har «fasiten» ingen andre.
                  Det handler ikke om hva du skal bli, men mer om hvem du vil
                  være. Vær nysgjerrig på egne interesser og verdier, høyst
                  sannsynlig oppdager du nye. Utforsk mulighetene dine.
                  Fremtiden kan fremstå usikker og det fine med det er at der
                  ligger mulighetene.
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
                  <IMGtjenester src={trudestudent} alt="placeholder" />
                </BoxTjenester>
              </ContainerVareProgrammer>

              <ContainerVareProgrammer>
                <UnderTitle>
                  <Rectangle />
                  Karriereveiledning - Ta kontroll mot nye muligheter
                </UnderTitle>
                <TextVareProgrammer>
                  Veiledningsprogrammet gjelder for deg som er rammet av
                  nedbemanning eller er i en omstillingsfase og ønsker ny jobb.
                  Programmet bygger på tre faser. Utgangspunktet er kartlegging
                  og bevisstgjøring av dine egenskaper, interesser, kompetanser,
                  verdier og utviklingspotensialet. Dette tar vi med oss videre
                  i utforskningen mot dine mål. Fremtiden kan oppleves usikker,
                  og nettopp der er mulighetene dine.
                </TextVareProgrammer>
              </ContainerVareProgrammer>
            </ContainerPhone>
          </Column>
        </NewSection>
      </Container>
      <IMGphoneTjenester src={trudestudent} alt="Placeholder" />
    </div>
  );
};

export default Tjenester;
