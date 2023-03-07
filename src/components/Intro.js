import caricature from "./img/caricature.png";
import {
  CaricatureImg,
  Column,
  Container,
  IntroText,
  MainBox,
  MarginDiv,
  NewSection,
  Tittel,
  UnderTitle,
} from "./styles/styledIntro";

const Intro = () => {
  return (
    <div>
      <MainBox>
        <Container>
          <NewSection>
            <Column>
              <Container>
                <MarginDiv>
                  <Tittel>
                    Vår karriereveildning <br></br>hjelper deg å finne veien
                    videre
                  </Tittel>
                  <UnderTitle>
                    Kanskje er du usikker på studievalget? <br></br>Kanskje er
                    du i omstilling i forbindelse med jobb?
                  </UnderTitle>
                  <IntroText>
                    Lev livet ditt her og nå, og vær samtidig nysgjerrig på
                    fremtiden din! Du skal ha mulighet til å finne og velge din
                    studie- og yrkesretning ut i fra egne ønsker, interesser og
                    forutsetninger. Vi bidrar på veien til selvstendige studie-
                    og yrkesvalg.
                  </IntroText>
                </MarginDiv>
              </Container>

              <CaricatureImg src={caricature} alt="caricature of people" />
            </Column>
          </NewSection>
        </Container>
      </MainBox>
    </div>
  );
};

export default Intro;
