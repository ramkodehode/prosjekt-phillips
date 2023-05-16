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
    position: relative;
    text-align: left;
    padding: 10px;
    flex-basis: 100%;
    align-items: center;
  }
`;

export const ContainerDesktop = styled.div`
  padding: 10px;
  text-align: left;

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
        <p>3-9 samlinger hvor hver økt varer 2 timer </p>
        <p>Øvelser mellom hvert veiledningsmøte </p> <Underline />
        <Column>
          <ContainerGroup>
            <ContainerDesktop>
              <p>Individuelt:</p>
              <br />
              <p>3 møter: 7200,-</p>
              <br />
              <p>6 møter: 13.140,-</p>
              <br />
              <p>9 møter: 19.710,-</p>
              <br />
              <p>Enkeltimer 1200,-</p>
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
              <p>3 møter: 7200,- </p>
              <br />
              <p>6 møter: 14.400,-</p>
              <br />
              <p>9 møter: 21.600,-</p>
            </ContainerGroup>
            <ContainerGroup>
              <p>Grupper:</p>
              <p>På forespørsel</p>
            </ContainerGroup>
          </ContainerPhoneBox>
          {/* Gave up. This is phone version */}
        </Column>
      </BoxPrice>
    </div>
  );
};

export default PriceBoxTwo;
