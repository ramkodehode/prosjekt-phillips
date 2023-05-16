import React from 'react';
import ContactForm from './contact/ContactForm';
import Footer from './footer';
import Intro from './Intro';

import KursDeltaker from './kursDeltaker';
import Navbar from './navbar/Navbar';
import GlobalStyle from './styles/Globalstyle';
import Tjenester from './Tjenester';
import InfoTrude from './trudeInfo';
import VartAnsvar from './vartAnsvar';
import KomIgjen from './komIgjen';
import Veiledning from './veiledning/Veiledning';
import Target from './Target/Target';
import Price from './price/Price';

const Hjem = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Intro />
      <VartAnsvar />
      <Tjenester />
      <Veiledning />
      <Price />
      {/* Dette er filen med karriere og studie veiledning som du ville forandre på Ram */}
      <InfoTrude />
      {/* <------------- Her skal visjon, mål og verdier inn Ram */}
      <Target />
      <KursDeltaker />
      <KomIgjen />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Hjem;
