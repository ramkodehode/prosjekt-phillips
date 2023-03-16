import styled from "styled-components";
import Trude from "./img/Trude.jpg";
import { Column, Container, NewSection } from "./styles/styledIntro";

export const ImgTrude = styled.img`
  height: 100vh;
  width: auto;
`;

export const ContainerTrude = styled.section`
  /* display: flex;
  flex-direction: column; */
  margin-left: 50px;
  margin-bottom: 100px;
`;

export const TrudeText = styled.h3`
  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 600;

  color: #faa100;
`;

export const TitleTrude = styled.h1`
  font-family: "Poppins";

  font-weight: 600;
  font-size: 2rem;
  color: #272521;
`;

export const MainTextTrude = styled.p`
  font-family: "Poppins";

  font-weight: 400;
  line-height: 165%;
  font-size: 1.2rem;
  color: #272521;

  max-width: 70%;
`;

const InfoTrude = () => {
  return (
    <div>
      <Container>
        <NewSection>
          <Column>
            <ContainerTrude>
              <ImgTrude src={Trude} alt="Picture of Trude" />
            </ContainerTrude>
            <ContainerTrude>
              <TrudeText>KARRIEREVEILEDER</TrudeText>
              <TitleTrude>Trude Skarstein Phillips</TitleTrude>
              <MainTextTrude>
                Karriereveileder og rådgiver i eget selskap. Jeg utvikler og
                leverer ulike karrierelæringsprogram. Kundene mine er unge og
                voksne i omstilling på studie- og arbeidsmarkedet. Foreleser i
                tillegg på høyskolenivå innen HR, organisasjon og ledelse. Har
                mange års erfaring fra ulike roller innen hotelledelse,
                prosjektledelse og forretningsutvikling. De siste 12 årene som
                selvstendig næringsdrivende innen rekruttering og omstilling.
                Formal kompetanse; Økonomi, markedsføring, prosjektledelse,
                pedagogikk, og master i karriereveiledning.
              </MainTextTrude>
              <TrudeText>MOBIL: 91691334</TrudeText>
              <TrudeText>EMAIL: trude@phillipskarriere.no </TrudeText>
            </ContainerTrude>
          </Column>
        </NewSection>
      </Container>
    </div>
  );
};

export default InfoTrude;
