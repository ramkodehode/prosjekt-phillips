import { Column, Container, NewSection } from "./styles/styledIntro";
import { CarrierContainer, YellowDot } from "./styles/styledKarriere";

const KarriereValg = () => {
  return (
    <div>
      <Container>
        <NewSection>
          <Column>
            <CarrierContainer>
              <YellowDot />
              <h2>Karriere læring</h2>
              <p>
                Lorem ipsum dolorco nsectetur adipiscing elit, sed do smod
                tempor incid iabo rcena.
              </p>
            </CarrierContainer>
            <CarrierContainer>
              <YellowDot />
              <h2>Karrierekompetanse</h2>
              <p>
                Lorem ipsum dolorco nsectetur adipiscing elit, sed do smod
                tempor incid iabo rcena.
              </p>
            </CarrierContainer>
            <CarrierContainer>
              <YellowDot />
              <h2>Karrierevalg</h2>
              <p>
                Lorem ipsum dolorco nsectetur adipiscing elit, sed do smod
                tempor incid iabo rcena.
              </p>
            </CarrierContainer>
          </Column>
        </NewSection>
      </Container>
    </div>
  );
};

export default KarriereValg;
