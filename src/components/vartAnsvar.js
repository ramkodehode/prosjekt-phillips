import { IntroText } from "./styles/styledIntro";
import { TitleTrude } from "./styles/styledTrude";
import { VartAnsvarContainer } from "./styles/styledVartAnsvar";

const VartAnsvar = () => {
  return (
    <div>
      <VartAnsvarContainer>
        <TitleTrude>
          Vi gir deg verktøyene du trenger for veien videre.
        </TitleTrude>

        <IntroText>
          De unge kjenner på usikkerhet i valg av høyere utdanning.
          Arbeidsmarkedet er i rask endring og gjør at flere opplever endret
          arbeidssituasjon. Mange arbeidsgivere ser verdien av å tilby ansatte
          karriereveiledning i forbindelse med omstilling. Det skaper verdi for
          den enkelte medarbeider, bedriftens omdømme og for samfunnet.
        </IntroText>
        <IntroText>
          I vår veiledning møter vi deg der du er, og vektlegger en trygg ramme
          basert på gjensidig tillit. Din læring frem mot egne mål er det
          sentrale om det gjelder studievalg, ny jobb, eller en kombinasjon. I
          samspillet med karriereveileder er du den aktive i prosessen. Våre
          karrierelæringsprogram er tilrettelagt individuelt, for grupper og i
          kombinasjonen av fysisk og digitale møter. Undervisning, verktøy og
          metodikk følger Nasjonalt kvalitetsrammeverk for karriereveiledning og
          DNV sertifisering.
        </IntroText>
        <IntroText>
          {" "}
          Representerer du arbeidsgiver møter vi deg for behovsavklaring og
          følger raskt opp med tilbud basert på dine behov.
        </IntroText>
      </VartAnsvarContainer>
    </div>
  );
};

export default VartAnsvar;
