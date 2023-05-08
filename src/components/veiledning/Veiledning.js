import React from 'react';
import {
  Container,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  UnorderedList,
  List,
  Content,
  Arrow,
  ArrowContainer,
  InfoContainer,
  Wrapper,
  HeadingTwoWrapper,
  InfoWrapper,
} from './Veiledning.styled';
import Pil from './polygon.png';

const Veiledning = () => {
  return (
    <Container>
      <Content>
        <HeadingOne>Studieveiledning</HeadingOne>

        <Wrapper>
          <InfoContainer>
            <HeadingTwo>Fase 1</HeadingTwo>

            <InfoWrapper></InfoWrapper>
            <HeadingThree>Utforsk mine interesser</HeadingThree>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <div> (interesser, evner, ferdigheter og verdier)</div>
              <List>Interesseprofil</List>
            </UnorderedList>
          </InfoContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>

            <HeadingThree>Utforsk mine muligheter</HeadingThree>
            <UnorderedList>
              <List>Undersøke ulike studie- og yrkesretninger</List>
              <List>Velge bort</List>
              <List>Velge​</List>
              <List>Mitt mulighetsrom</List>
            </UnorderedList>
          </InfoContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>

            <HeadingThree>Utforsk mine interesser</HeadingThree>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <div> (interesser, evner, ferdigheter og verdier)</div>
              <List>Strukturert dybdeintervju</List>
            </UnorderedList>
          </InfoContainer>
        </Wrapper>
        <HeadingOne>Karriereveiledning</HeadingOne>

        <Wrapper>
          <InfoContainer>
            <HeadingTwo>Fase 1</HeadingTwo>

            <HeadingThree>Utforsk mine interesser</HeadingThree>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <div> (interesser, evner, ferdigheter og verdier)</div>
              <List>Strukturert dybdeintervju</List>
            </UnorderedList>
          </InfoContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>

            <HeadingThree>Utforsk mine interesser</HeadingThree>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <div> (interesser, evner, ferdigheter og verdier)</div>
              <List>Strukturert dybdeintervju</List>
            </UnorderedList>
          </InfoContainer>
          <ArrowContainer>
            <Arrow src={Pil}></Arrow>
          </ArrowContainer>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>

            <HeadingThree>Utforsk mine interesser</HeadingThree>
            <UnorderedList>
              <List>Interessespørsmål​</List>
              <List>Interessebilder</List>
              <List>Strukturert dybdeintervju​</List>
              <div> (interesser, evner, ferdigheter og verdier)</div>
              <List>Strukturert dybdeintervju</List>
            </UnorderedList>
          </InfoContainer>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Veiledning;
