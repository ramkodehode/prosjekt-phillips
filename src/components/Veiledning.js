import styled from "styled-components";
import Arrow from "./styles/arrow";
import PriceBox from "./price";
import {
  Column,
  Container,
  NewSection,
  UnderTitle,
} from "./styles/styledIntro";

export const BoxVeiledning = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: 86rem;

  margin: 0 auto;
  top: -150px;

  position: relative;

  z-index: -1;

  background-color: #fbd19c;

  flex-basis: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerVeiledning = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;

  font-family: "Poppins";
  font-size: 1.2em;
`;

const Veiledning = () => {
  return (
    <div>
      <BoxVeiledning>
        <Container>
          <NewSection>
            <Column>
              {/* Left side */}
              <ContainerVeiledning>
                <h1>Studieveiledning</h1>
                {/* First Phase box */}
                <UnderTitle>Fase 1</UnderTitle>
                <p>Utforsk mine interesser</p>
                <ul>
                  <li>Interessespørsmål</li>

                  <li>Interessebilder</li>
                  <li>
                    Strukturert dybdeintervju (interesser, evner, ferdigheter og
                    verdier)
                  </li>
                  <li>Interesseprofil</li>
                </ul>
                <Arrow />
                {/* Second Phase box */}
                <UnderTitle>Fase 2</UnderTitle>
                <p>Utforske mine muligheter​</p>
                <ul>
                  <li>Undersøke ulike studie- og yrkesretninger​</li>
                  <li>Velge bort</li>
                  <li>Velge</li>
                  <li>Mitt mulighetsrom</li>
                </ul>
                <Arrow />
                {/* Third Phase box */}
                <UnderTitle>Fase 3</UnderTitle>
                <p>Utforske mitt mulighetsrom ​</p>
                <ul>
                  <li>Definere mine vurderingskriterier​</li>
                  <li>Definere mine tre alternative valg​</li>
                  <li>Mitt valg ​</li>
                </ul>
              </ContainerVeiledning>
              {/* Right side */}
              <ContainerVeiledning>
                <h1>Karriereveiledning</h1>
                {/* First Phase box */}
                <UnderTitle>Fase 1</UnderTitle>
                <p>Utforske meg selv​</p>
                <ul>
                  <li>Personlige egenskaper og styrker​</li>
                  <li>Kompetanser​</li>
                  <li>Verdier​</li>
                  <li>Interesser​</li>
                  <li>Definere mål</li>
                </ul>
                <Arrow />
                {/* Second Phase box */}
                <UnderTitle>Fase 2</UnderTitle>
                <p>Utforske mine muligheter​</p>
                <ul>
                  <li>Mitt marked/mulighetsrom​</li>
                  <li>Mine verktøy ​</li>
                  <li>Situasjon, atferd, resultat - SAR​</li>
                  <li>Egen profil – ønsket rolle​</li>
                  <li>Handlingsplan</li>
                </ul>
                <Arrow />
                {/* Third Phase box */}
                <UnderTitle>Fase 3</UnderTitle>
                <p>Ta kontroll</p>
                <ul>
                  <li>Trene på bruk av mine verktøy​</li>
                  <li>Ta initiativ og ansvar​</li>
                  <li>Kommunisere</li>
                  <li>Forhandle</li>
                </ul>
              </ContainerVeiledning>
            </Column>
          </NewSection>
        </Container>
      </BoxVeiledning>
      <PriceBox />
    </div>
  );
};

export default Veiledning;
