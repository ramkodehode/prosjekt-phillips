import React from 'react';

import studieicon from '../pricePage/priceicon.png';
import karriereicon from '../pricePage/iconprice.png';
import {
  Container,
  HeadingOne,
  HeadingTwo,
  IconContainer,
  Paragraph,
  PriceBox,
  PriceBoxContainer,
  StudieveiledningIcon,
  Content,
  Line,
} from './Price.styled';

const Price = () => {
  return (
    <>
      <HeadingOne id="priser">Priser</HeadingOne>
      <Container>
        <PriceBoxContainer>
          <PriceBox>
            <Content>
              <IconContainer>
                <StudieveiledningIcon src={studieicon} />
              </IconContainer>
              <HeadingTwo>Studieveiledning</HeadingTwo>
              <Paragraph>3 samlinger hvor hver økt varer 2 timer</Paragraph>
              <Paragraph>Øvelser mellom hvert veiledningsmøte</Paragraph>
              <Paragraph></Paragraph>

              <Line></Line>

              <Paragraph>Induviduelt</Paragraph>
              <Paragraph>6549,-</Paragraph>
              <Paragraph>Grupper</Paragraph>
              <Paragraph>5940,-</Paragraph>
            </Content>
          </PriceBox>
          <PriceBox>
            <Content>
              <IconContainer>
                <StudieveiledningIcon src={karriereicon} />
              </IconContainer>
              <HeadingTwo>Karriereveiledning</HeadingTwo>
              <Paragraph>Øvelser mellom hver økt</Paragraph>
              <Paragraph>Spesifikke råd tilpasset din situasjon</Paragraph>
              <Paragraph></Paragraph>
              <Line></Line>
              <Paragraph>Induviduelt</Paragraph>
              <Paragraph>6549,-</Paragraph>
            </Content>
          </PriceBox>
        </PriceBoxContainer>
      </Container>
    </>
  );
};

export default Price;
