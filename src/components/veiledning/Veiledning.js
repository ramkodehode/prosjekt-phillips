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
} from "./Veiledning.styled";
import Pil from "./polygon.png";

const Veiledning = () => {
  return (
    <MainContainer>
      <HeadingOne>Studieveiledning</HeadingOne>
      <Container>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforske interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 2</HeadingTwo>
          <HeadingThree>Utforsk mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforsk mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
          </UlWrapper>
        </InfoContainer>
      </Container>
      <HeadingOne>Studieveiledning</HeadingOne>
      <Container>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforsk mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 2</HeadingTwo>
          <HeadingThree>Utforsk mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
            <ArrowContainer>
              <Arrow src={Pil}></Arrow>
            </ArrowContainer>
          </UlWrapper>
        </InfoContainer>
        <InfoContainer>
          <HeadingTwo>Fase 1</HeadingTwo>
          <HeadingThree>Utforsk mine interesser</HeadingThree>

          <UlWrapper>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <span> (interesser, evner, ferdigheter og verdier)</span>
              <List>Interesseprofil</List>
            </UnorderedList>
          </UlWrapper>
        </InfoContainer>
      </Container>
    </MainContainer>
  );
};

export default Veiledning;
