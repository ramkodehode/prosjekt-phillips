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
              <TrudeText>KARRIEREVEILEDER</TrudeText>
              <TitleTrude>Trude Skarstein Phillips</TitleTrude>
              <MainTextTrude>
                Karriereveileder og rådgiver i eget selskap. Jeg utvikler og
                leverer karrierelæringsprogram for mennesker i ulike overganger.
                Mange unge opplever studievalget vanskelig og har behov for
                profesjonell veiledning frem mot valget. Å bidra til deres
                læring frem mot selvstendige studievalg er spesielt givende.
                Raske endringer på arbeidsmarkedet gjør at stadig flere opplever
                omstilling i arbeidssituasjonen og har behov for profesjonell
                karriereveiledning for å nå nye mål. I tillegg bidrar jeg inn
                til ulike virksomheter for ulike HR relaterte prosjekter, holder
                foredrag innen temaet karrierelæring og karrierekompetanse, samt
                foreleser på høyskolenivå innen HR, organisasjon og ledelse. Har
                mange års erfaring fra ulike roller innen hotelledelse,
                prosjektledelse og forretningsutvikling. De siste 12 årene som
                selvstendig næringsdrivende innen rekruttering og omstilling. Er
                DNV sertifisert rekrutterer og sertifisert i bruk av ulike DNV
                godkjente test- og kartleggingsverktøy. Formal kompetanse;
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
