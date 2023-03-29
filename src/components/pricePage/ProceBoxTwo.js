import { Column } from "../styles/styledIntro";
import {
  BoxPrice,
  ContainerGroup,
  ImgPrice,
  TextYellow,
  Underline,
} from "./StyledPrice";

import styled from "styled-components";

import iconprice from "./iconprice.png";

export const ContainerPhoneBox = styled.div`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    margin: 0 auto;

    text-align: center;

    padding: 10px;

    flex-basis: 100%;
    align-items: center;
  }
`;

export const ContainerDesktop = styled.div`
  text-align: center;
  padding: 10px;

  flex-basis: 100%;
  align-items: center;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

const PriceBoxTwo = () => {
  return (
    <div>
      <BoxPrice>
        <ImgPrice src={iconprice} alt="icon" />
        <h2>Priser</h2>
        <TextYellow>Karriereveiledning</TextYellow>
        <p>6-9 samlinger hvor en hver økt varer 2 timer </p>
        <p>Øvelser mellom hver økt </p>{" "}
        <p>
          Individuell oppmerksomhet på din <br /> karriereretning
        </p>{" "}
        <p>Spesifikke råd tilpasset din situasjon</p>
        <Underline />
        <Column>
          <ContainerGroup>
            <ContainerDesktop>
              <p>Individuelt:</p>
              <br />
              <p>6 timer 7200,- </p>
              <br />
              <p>12 timer 14.400,-</p>
              <br />
              <p>18 timer 21.600,-</p>
            </ContainerDesktop>
          </ContainerGroup>
          <ContainerGroup>
            <ContainerDesktop>
              <p>Grupper:</p>
              <br />
              <p>På forespørsel</p>
            </ContainerDesktop>
          </ContainerGroup>
        </Column>
        <Column>
          {/* Gave up. This is phone version */}
          <ContainerPhoneBox>
            <ContainerGroup>
              <p>Individuelt:</p>
              <br />
              <p>3 møter 6 timer 7200,- </p>
              <br />
              <p>6 møter 12 timer 14.400,-</p>
              <br />
              <p>9 møter 18 timer 21.600,-</p>
            </ContainerGroup>
            <ContainerGroup>
              <p>Grupper på forespørsel</p>
            </ContainerGroup>
          </ContainerPhoneBox>
          {/* Gave up. This is phone version */}
        </Column>
      </BoxPrice>
    </div>
  );
};

export default PriceBoxTwo;
