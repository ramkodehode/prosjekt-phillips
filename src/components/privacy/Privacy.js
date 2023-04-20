import React from 'react';
import PrivacyNavbar from './PrivacyNavbar';

import {
  PolicyTitle,
  PolicySubTitle,
  PolicyContainer,
  PolicyLevel,
  PolicyInfo,
  WebLink,
  PolicySection,
  Li,
  Ul,
} from './Privacy.styled';

const Privacy = () => {
  return (
    <>
      <PrivacyNavbar />

      <PolicyContainer>
        <PolicySection>
          <PolicyTitle>
            <h1>Personvernerklæring</h1>
          </PolicyTitle>

          <PolicySubTitle>
            <h2>Hvem vi er og hva slags informasjon vi behandler</h2>
          </PolicySubTitle>

          <PolicyInfo>
            <p>
              Vår nettstedsadresse er <br />
              <WebLink to="https://phillipskarriere.no">
                https://phillipskarriere.no
              </WebLink>{' '}
              og selskapet som står bak er Phillips Karriere med <br />{' '}
              organisasjonsnummer; 829590352{' '}
            </p>
          </PolicyInfo>
        </PolicySection>

        <PolicySection>
          <PolicyLevel>
            <p>
              Vi har tre ulike nivåer for personvern i våre nettløsninger.{' '}
              <br /> Den åpne nettsiden, når du ber om tilbud/forespør på
              studie- og eller karriereveileding og når vi inngår i et
              kundeforhold:
            </p>
          </PolicyLevel>
        </PolicySection>

        <PolicySection>
          <Ul>
            <Li>
              1. Denne nettsiden lagrer ingen personlig informasjon om deg som
              bruker annet enn å måle og forstå nettrafikk for å gjøre sidene
              bedre og mer tilgjengelig.
            </Li>
            <br />
            <Li>
              Når du kontakter oss via kontaktsiden eller i skjemaet for
              kontakt/forespørsel om studie- og eller karriereveileding lagres
              denne informasjonen trygt og behandles fortrolig.
              <br />
              Vi er godt rutinerte med å behandle informasjon belagt med
              taushetsplikt. Så fort vi har opprettet dialog blir denne
              informasjonen rutinemessig slettet.
            </Li>
            <br />

            <Li>
              Når du har avtalt tid for veilednings inngår vi i et kundeforhold.
              Da lagrer vi så lite vi kan, men akkurat nok til å oppfylle våre
              forpliktelser overfor deg som kunde.
              <br />
              Det krever norske lover som i tur er innenfor GDPR.
            </Li>
          </Ul>
        </PolicySection>

        <PolicySection>
          <PolicySubTitle>
            <h2>Bilder og video</h2>
          </PolicySubTitle>
          <p>De som brukes på nettsidene.</p>

          <p>
            {' '}
            1. På nettsiden brukes kun bilder der rettighetshaver (fotografen),
            og den som er avbildet har godkjent bruken.{' '}
          </p>
        </PolicySection>

        <PolicySection>
          <PolicySubTitle>
            <h2>Innebygd innhold fra andre nettsteder</h2>
          </PolicySubTitle>
          <p>
            Artikler på denne siden kan inkludere innebygd innhold (f.eks.
            videoer, bilder, artikler osv.). Innebygd innhold fra andre
            nettsteder oppfører seg på nøyaktig samme måte som om den besøkende
            hadde besøkt nettstedet som det innebygde innholdet kommer fra.
            Disse nettstedene kan samle inn opplysninger om deg, bruke
            informasjonskapsler, bygge inn sporingssystemer fra tredjeparter og
            overvåke hva du gjør via dette innebygde innholdet. Dette omfatter
            også sporing av handlingene dine via det innebygde innholdet dersom
            du har en konto og er logget inn på nettstedet.
          </p>
        </PolicySection>

        <PolicySection>
          <PolicySubTitle>
            <h2>Hvem vi deler dine opplysninger med</h2>
          </PolicySubTitle>
          <p>
            Vi deler ingen opplysninger med andre annet enn nødvendig
            faktureringsinformasjon i vårt regnskapssystem (Fiken.no).{' '}
          </p>
        </PolicySection>

        <PolicySection>
          <PolicySubTitle>
            <h2>Hvor lenge vi oppbevarer opplysninger om deg</h2>
          </PolicySubTitle>
          <p>
            Vi sletter informasjon rutinemessig så snarlig som mulig. For
            forespørsler til oss som inneholder personlig informasjon vil dette
            slettes så fort videre dialog er igangsatt. Når vi inngår i et
            kundeforhold må vi forholde oss til regnskapsloven og
            personvernforordningene i Norge. Disse er i samsvar med GDPR.
          </p>
        </PolicySection>

        <PolicySection>
          <PolicySubTitle>
            <h2>
              Rettighetene dine når det gjelder opplysninger vi har om deg
            </h2>
          </PolicySubTitle>
          <p>
            Når du har kontaktet oss og/eller har et kundeforhold med oss kan du
            be om å få en eksportfil som inneholder personopplysningene vi har
            om deg. Dette omfatter all data du har gitt oss og som vi fortsatt
            lagrer. Du kan også be om at vi sletter alle personopplysninger vi
            har om deg. Dette omfatter ikke opplysninger vi er pålagt å lagre av
            administrative, juridiske eller sikkerhetsmessige årsaker.
          </p>
        </PolicySection>
      </PolicyContainer>
    </>
  );
};

export default Privacy;
