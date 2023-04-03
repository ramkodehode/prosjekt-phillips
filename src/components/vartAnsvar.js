import seatedstudent from "./img/seatedstudent.png";
import { Column, Container, IntroText, NewSection } from "./styles/styledIntro";
import { TitleTrude } from "./styles/styledTrude";
import {
  PhonePicBox,
  PhoneSittingStudents,
  PicBox,
  Rectangle,
  SittingStudents,
  VartAnsvarContainer,
} from "./styles/styledVartAnsvar";

const VartAnsvar = () => {
  return (
    <div>
      <Container>
        <NewSection>
          <Column>
            <VartAnsvarContainer>
              <TitleTrude>
                Våre program gir deg verktøyene du trenger for veien videre.
              </TitleTrude>
              <IntroText>
                Vi møter deg der du er, og vektlegger en trygg ramme basert på
                gjensidig tillit. Din læring frem mot målet er det sentrale om
                det gjelder studievalg eller ny jobb. I samspillet med
                karriereveileder er du den aktive. Våre karrierelæringsprogram
                er tilrettelagt individuelt, for grupper og i kombinasjonen av
                fysisk og digitale møter. Våre programmer med digitale verktøy,
                personlighet-/kartleggingstester og metodikk følger Nasjonalt
                kvalitetsrammeverk for karriereveiledning og DNV sertifisering.
              </IntroText>
              <IntroText>
                {" "}
                Representerer du arbeidsgiver møter vi deg for behovsavklaring
                og følger raskt opp med tilbud basert på dine behov og vår
                karriereveiledning.
              </IntroText>
            </VartAnsvarContainer>
            <VartAnsvarContainer>
              <PicBox>
                <SittingStudents src={seatedstudent} alt="sitting students" />
              </PicBox>
            </VartAnsvarContainer>
          </Column>
        </NewSection>
      </Container>
      <PhonePicBox>
        <PhoneSittingStudents src={seatedstudent} alt="sitting students" />
      </PhonePicBox>
    </div>
  );
};

export default VartAnsvar;
