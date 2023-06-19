import { IntroText, UnderTitle } from "./styles/styledIntro";
import { TitleTrude } from "./styles/styledTrude";
import {
  BigScreenVartAnsvar,
  Rectangle,
  VartAnsvarContainer,
} from "./styles/styledVartAnsvar";

const VartAnsvar = () => {
  return (
    <div>
      <BigScreenVartAnsvar>
        <VartAnsvarContainer>
          <TitleTrude>
            Vi gir deg verktøyene du trenger for veien videre.
          </TitleTrude>

          <UnderTitle>
            <Rectangle>.</Rectangle>
            Stadige endringer i arbeidslivet byr på utfordringer og nye
            muligheter.{" "}
          </UnderTitle>

          <IntroText>
            Mange unge kjenner på usikkerhet i valg av høyere utdanning, og
            arbeidstakere opplever hyppigere omstilling. I dette landskapet skal
            den enkelte ta valg og håndtere utfordringer knyttet til utdanning
            og arbeid. Det krever å finne ut av hva en ønsker, har interesse
            for, egne verdier, hva en kan og hva en er god til.
            Karrierekompetanse bidrar til nettopp dette. Det er blant annet
            kompetanse til å kjenne og forstå seg selv og sin kontekst, ta valg
            og ta ansvar for sine valg.
          </IntroText>
          <IntroText>
            Vårt utgangspunkt er å møte deg der du er med respekt, interesse og
            nysgjerrighet. Det viktige er din læring frem mot nye muligheter om
            det gjelder studievalg, ny jobb, eller en kombinasjon. Du er den
            aktive i samspillet med karriereveileder. I tråd med Nasjonalt
            kvalitetsrammeverk for karriereveiledning skal vi bidra til
            karrierekompetanse gjennom utforskning og læring.
          </IntroText>
        </VartAnsvarContainer>
      </BigScreenVartAnsvar>
    </div>
  );
};

export default VartAnsvar;
