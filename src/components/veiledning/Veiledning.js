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
  InfoContainerWrapper,
  Spacing,
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
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </InfoContainerWrapper>
          </InfoContainer>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </InfoContainerWrapper>
          </InfoContainer>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
            </InfoContainerWrapper>
          </InfoContainer>
        </Wrapper>

        <Spacing></Spacing>
        <HeadingOne>Karriereveiledning</HeadingOne>

        <Wrapper>
          <InfoContainer>
            <HeadingTwo>Fase 1</HeadingTwo>
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </InfoContainerWrapper>
          </InfoContainer>
          <InfoContainer>
            <HeadingTwo>Fase 2</HeadingTwo>
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
              <ArrowContainer>
                <Arrow src={Pil}></Arrow>
              </ArrowContainer>
            </InfoContainerWrapper>
          </InfoContainer>
          <InfoContainer>
            <HeadingTwo>Fase 3</HeadingTwo>
            <HeadingThree>Utforsk mine interesser</HeadingThree>

            <InfoContainerWrapper>
              <UnorderedList>
                <List>Interessespørsmål​</List>
                <List>Interessebilder</List>
                <List>Strukturert dybdeintervju​</List>
                <div> (interesser, evner, ferdigheter og verdier)</div>
                <List>Interesseprofil</List>
              </UnorderedList>
            </InfoContainerWrapper>
          </InfoContainer>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Veiledning;
