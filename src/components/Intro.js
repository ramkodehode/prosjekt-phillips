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
  UnderTitleYellow,
} from "./styles/styledIntro";

const Intro = () => {
  return (
    <div id="/">
      <MainBox>
        <Container>
          <NewSection>
            <Column>
              <Container>
                <MarginDiv>
                  <Tittel>
                    Karriereveiledning - en god investering for mennesker i
                    omstilling
                  </Tittel>
                  <UnderTitleYellow>
                    Dine muligheter - vår målsetning
                  </UnderTitleYellow>
                  <IntroText>
                    Usikker på studievalg? <br /> Er målet ny jobb?
                    <br /> Leder du mennesker i nedbemanning eller omstilling?
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
