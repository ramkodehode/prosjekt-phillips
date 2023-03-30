import React from 'react';
import styled from 'styled-components';
import ContactForm from './contact/ContactForm';
import Footer from './footer';
import Intro from './Intro';
import KomIgjen from './komIgjen';
import KursDeltaker from './kursDeltaker';
import Navbar from './navbar/Navbar';
import PictureBoxes from './pictureBoxes';
import Tjenester from './Tjenester';
import InfoTrude from './trudeInfo';
import VartAnsvar from './vartAnsvar';
import Veiledning from './Veiledning';

const Hjem = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <VartAnsvar />
      <Tjenester />
      <Veiledning />
      <InfoTrude />
      <KomIgjen />
      <PictureBoxes />
      <KursDeltaker /> {/* <------------ Her skal Karuselen inn Monica */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default Hjem;
