import caricature from "./img/caricature.png";
import {
  CaricatureImg,
  Column,
  Container,
  IntroText,
  MainBox,
  MarginDiv,
  NewSection,
  PhoneCaricatureImg,
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
                    {/* Vår karriereveildning <br></br>hjelper deg å finne veien
                    videre */}
                    Karriereveiledning - en god investering for mennesker i
                    omstilling
                  </Tittel>
                  <UnderTitle>
                    {/* Kanskje er du usikker på studievalget? <br></br>Kanskje er
                    du i omstilling i forbindelse med jobb? */}
                    Dine muligheter - vårt ansvar!
                  </UnderTitle>
                  <IntroText>
                    {/* Lev livet ditt her og nå, og vær samtidig nysgjerrig på
                    fremtiden din! Du skal ha mulighet til å finne og velge din
                    studie- og yrkesretning ut i fra egne ønsker, interesser og
                    forutsetninger. Vi bidrar på veien til selvstendige studie-
                    og yrkesvalg. */}
                    {/* Vår ambisjon er å møte deg der du er. Dine behov er
                    utgangspunktet og det sentrale er din læring frem mot ditt
                    selvstendige valg av studie-/yrkesretning. Vi vektlegger en
                    trygg og profesjonell ramme for samspillet mellom deg og din
                    karriereveileder, hvor du er den aktive. Våre
                    karrierelæringsprogram og digitale verktøy følger Nasjonalt
                    kvalitetsrammeverk for karriereveiledning. */}
                    Er du usikker på studievalget ditt? <br /> Er målet ny jobb?
                    <br />
                    Representerer du arbeidsgiver og står foran nedbemanning?
                  </IntroText>
                  <PhoneCaricatureImg
                    src={caricature}
                    alt="caricature of people"
                  />
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
