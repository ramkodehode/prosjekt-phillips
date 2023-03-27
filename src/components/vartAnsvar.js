import seatedstudent from "./img/seatedstudent.png";
import {
  Column,
  Container,
  IntroText,
  NewSection,
  Tittel,
  UnderTitle,
} from "./styles/styledIntro";
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
      {/* <ImgStudentBehindFence
        src={studentsbehindfence}
        alt="Students standing behind a fence"
      /> */}

      <Container>
        <NewSection>
          <Column>
            <VartAnsvarContainer>
              <Tittel>Dine muligheter - vårt ansvar</Tittel>
              <UnderTitle>
                <Rectangle />
                Vårt program er skreddsydd til å gi deg egenskapene du trenger
                for veien framover.
              </UnderTitle>
              <IntroText>
                Gruppefellesskap, digitale læringsplattformer og øvrige
                pedagogiske verktøy er sentralt i vår undervisning.
                Karrierelæringsprogrammene leveres gjennom fysiske og digitale
                samlinger i kombinasjonen gruppe- og individnivå. Våre
                karrierelæringsprogram bygger på Kompetanse Norge sitt
                kvalitetsrammeverk for karriereveiledning.
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
