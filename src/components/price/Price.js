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
  MainContainer,
} from './Price.styled';

const Price = () => {
  return (
    <>
      <MainContainer>
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
                <Paragraph></Paragraph>

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
                <Paragraph></Paragraph>

                <Paragraph>Induviduelt</Paragraph>
                <Paragraph>3 møter, 6 timer: 6690,-</Paragraph>
                <Paragraph>6 møter, 10 timer: 14.400,-</Paragraph>
                <Paragraph>9 møter, 15 timer: 16.725,-</Paragraph>
                <Paragraph>Enkeltimer: 1200,-</Paragraph>
              </Content>
            </PriceBox>
          </PriceBoxContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Price;
