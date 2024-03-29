import Trude from "./img/Trude.jpg";
import { Column, Container, NewSection } from "./styles/styledIntro";
import {
  BoxTrude,
  ContainerTrude,
  ImgTrude,
  MainTextTrude,
  PhoneImgTrude,
  TitleTrude,
  TrudeText,
} from "./styles/styledTrude";

const InfoTrude = () => {
  return (
    <div>
      <Container>
        <NewSection>
          <Column>
            <ContainerTrude>
              <BoxTrude>
                <ImgTrude src={Trude} alt="Picture of Trude" />
              </BoxTrude>
            </ContainerTrude>
            <ContainerTrude>
              <TitleTrude id="om">Trude Skarstein Phillips</TitleTrude>
              <MainTextTrude>
                Arbeider i dag som karriereveileder og underviser i tillegg på
                høyskole innen HR, organisasjon og ledelse, samt fagskole i
                merkantile fag. Utvikler og leverer karrierelæringsprogram for
                mennesker i ulike omstillingsfaser. Holder foredrag innen temaet
                karriere. Samarbeider med aktører innen HR hvor hun bistår i
                omstillingsprosesser med levering av karriereveiledning. Er i
                tillegg rådgiver i rekrutteringsprosesser. Har mange års
                erfaring fra ulike lederroller i næringslivet. De siste 12 årene
                som selvstendig næringsdrivende innen rekruttering og
                omstilling. Er DNV-sertifisert rekrutterer og sertifisert i bruk
                av ulike DNV-godkjente test- og kartleggingsverktøy. Formell
                kompetanse; Økonomi, markedsføring, prosjektledelse, pedagogikk,
                og master i karriereveiledning.
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
