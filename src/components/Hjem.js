import React from 'react';
import styled from 'styled-components';
import ContactForm from './contact/ContactForm';
import Intro from './Intro';
import KomIgjen from './komIgjen';
import KursDeltaker from './kursDeltaker';
import Navbar from './navbar/Navbar';
import PictureBoxes from './pictureBoxes';
import Tjenester from './Tjenester';
import InfoTrude from './trudeInfo';
import VartAnsvar from './vartAnsvar';
import Veiledning from './Veiledning';

export const EmptySpace = styled.div`
  width: auto;
  height: 200px;
  margin-top: 100px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: auto;
  }
`;

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
      <EmptySpace />
    </>
  );
};

export default Hjem;
