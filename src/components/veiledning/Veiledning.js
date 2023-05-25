import React from "react";
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
  InfoContainerMobil,
  Spacing,
} from "./Veiledning.styled";
import Pil from "./polygon.png";

const Veiledning = () => {
  return (
    <MainContainer>
      <HeadingOne>Studieveiledning</HeadingOne>
      <Container>
        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 1</HeadingTwo>
            <HeadingThree>Utforske interesser</HeadingThree>

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
        </InfoContainerMobil>

        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>
            <HeadingThree>Utforske muligheter</HeadingThree>

            <UlWrapper>
              <UnorderedList>
                <List>Undersøke ulike studie- og yrkesretninger</List>
                <List>Velge bort</List>
                <List>Velge</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </UlWrapper>
          </InfoContainer>
        </InfoContainerMobil>

        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>
            <HeadingThree>Mitt mulighetsrom</HeadingThree>

            <UlWrapper>
              <UnorderedList>
                <List>Definere vurderingskriterier</List>
                <List>Definere alternative valg</List>
                <List>Mitt valg </List>
              </UnorderedList>
            </UlWrapper>
          </InfoContainer>
        </InfoContainerMobil>
      </Container>

      <Spacing />
      <HeadingOne>Karriereveiledning</HeadingOne>
      <Container>
        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 1</HeadingTwo>
            <HeadingThree>Utforske - bevistgjøre</HeadingThree>

            <UlWrapper>
              <UnorderedList>
                <List>Personlige egenskaper</List>
                <List>Kompetanser</List>
                <List>Verdier og interesser</List>
                <List>Situasjon, atferd, resulat - SAR</List>
                <List>Definere mål</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </UlWrapper>
          </InfoContainer>
        </InfoContainerMobil>

        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>
            <HeadingThree>Utforske muligheter</HeadingThree>

            <UlWrapper>
              <UnorderedList>
                <List>Forstå arbeidsmarkedet</List>
                <List>Nettverk og relasjonsbygging</List>
                <List>Egen profil - ønsket rolle </List>
                <List>Handlingsplan</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </UlWrapper>
          </InfoContainer>
        </InfoContainerMobil>

        <InfoContainerMobil>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>
            <HeadingThree>Ta kontroll</HeadingThree>

            <UlWrapper>
              <UnorderedList>
                <List>Trene på bruk av mine verktøy</List>
                <List>Ta initiativ og ansvar</List>
                <List>Kommunisere</List>
                <List>Forhandle</List>
              </UnorderedList>
            </UlWrapper>
          </InfoContainer>
        </InfoContainerMobil>
      </Container>
    </MainContainer>
  );
};

export default Veiledning;
