import React from 'react';
import {
  Container,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  UnorderedList,
  List,
  Arrow,
  ArrowContainer,
  InfoContainer,
  UlWrapper,
  MainContainer,
} from './Veiledning.styled';
import Pil from './polygon.png';

const Veiledning = () => {
  return (
    <MainContainer>
      <HeadingOne>Studieveiledning</HeadingOne>
      <Container>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforske mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <List>Interesseprofil</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 2</HeadingTwo>
          <HeadingThree>Utforske mine muligheter</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Undersøke ulike studie- og</List>
              <span> yrkesretning</span>
              <List>Velge bort</List>
              <List>Velge</List>
              <List>Mitt mulighetsrom</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 3</HeadingTwo>
          <HeadingThree>Utforsk mitt mulighetsrom</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Definere mine vurderingskriterier</List>
              <List>Definere mine tre alternative valg</List>
              <List>Mitt valg </List>
            </UnorderedList>
          </UlWrapper>
        </InfoContainer>
      </Container>
      <HeadingOne>Karriereveiledning</HeadingOne>
      <Container>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforske - bevistgjøre</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Personlige egenskaper</List>
              <span> og styrker</span>

              <List>Kompetanser</List>
              <List>Verdier og interesser</List>
              <List>Definere mål</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 2</HeadingTwo>
          <HeadingThree>Utforske mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Mitt mulighetsrom</List>
              <List>Interessebilder</List>
              <List>Mine verktøy</List>
              <UnorderedList>
                <List>Situasjon, atferd, resulat - SAR</List>
                <List>Egen profil - ønsket rolle </List>
              </UnorderedList>
              <List>Handlingsplan</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 3</HeadingTwo>
          <HeadingThree>Ta kontroll</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Trene på bruk av mine verktøy</List>
              <UnorderedList>
                <List>Ta initiativ og ansvar</List>
                <List>Kommunisere</List>
                <List>Forhandle</List>
              </UnorderedList>
            </UnorderedList>
          </UlWrapper>
        </InfoContainer>
      </Container>
    </MainContainer>
  );
};

export default Veiledning;
