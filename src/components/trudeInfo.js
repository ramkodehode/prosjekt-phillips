import Trude from "./img/Trude.jpg";
import { Column, Container, NewSection } from "./styles/styledIntro";
import {
  ContainerTrude,
  ImgTrude,
  MainTextTrude,
  PhoneImgTrude,
  TitleTrude,
  TrudeText,
} from "./styles/styledTrude";

const InfoTrude = () => {
  return (
    <div id="om">
      <Container>
        <NewSection>
          <Column>
            <ContainerTrude>
              <ImgTrude src={Trude} alt="Picture of Trude" />
            </ContainerTrude>
            <ContainerTrude>
              <TitleTrude>Trude Skarstein Phillips</TitleTrude>
              <MainTextTrude>
                Arbeider i dag som karriereveileder og underviser på
                høyskolenivå innen HR, organisasjon og ledelse. Utvikler og
                leverer karrierelæringsprogram for mennesker i ulike
                omstillingsfaser. Holder foredrag innen temaet karrierelæring og
                karrierekompetanse. Har mange års erfaring fra ulike lederroller
                i næringslivet. De siste 12 årene som selvstendig
                næringsdrivende innen rekruttering og omstilling. Er
                DNV-sertifisert rekrutterer og sertifisert i bruk av ulike
                DNV-godkjente test- og kartleggingsverktøy. Formell kompetanse;
                Økonomi, markedsføring, prosjektledelse, pedagogikk, og master i
                karriereveiledning.
              </MainTextTrude>
              <TrudeText>MOBIL: 91691334</TrudeText>
              <TrudeText>EMAIL: trude@phillipskarriere.no </TrudeText>
            </ContainerTrude>
          </Column>
        </NewSection>
      </Container>
      <PhoneImgTrude src={Trude} alt="Picture of Trude" />
    </div>
  );
};

export default InfoTrude;
