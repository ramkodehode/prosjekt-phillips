import React from "react";

import { OrgNr } from "./privacy/Privacy.styled";
import kvalitet from "./img/kvalitet.png";
import {
  EmptySpace,
  FooterContainer,
  ImgKvalitet,
  StyledLink,
} from "./styles/styledFooter";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMedia = styled.a`
  text-decoration: none;

  color: white;

  font-size: 2rem;

  margin: 0.6rem;

  &:hover {
    color: #e5701b;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 4rem;
  }
`;

export const DivMedia = styled.div`
  padding: 1rem;
`;

const Footer = () => {
  return (
    <div>
      <EmptySpace>
        <FooterContainer>
          <p>
            Phillips Karriere <br /> <br /> Organisasjonsnummer:{" "}
            <OrgNr>829590352. </OrgNr>
          </p>

          <DivFooter>
            <StyledLink to="/privacy">Personvernerklæring</StyledLink>

            <DivMedia>
              <LinkMedia
                href="https://www.facebook.com/profile.php?id=100094047773942"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </LinkMedia>

              <LinkMedia
                href="https://instagram.com/phillips_karriere?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </LinkMedia>
            </DivMedia>
          </DivFooter>
          <p>
            Copyright 2023 © All Rights Reserved. <br />
            Built by K3
            <a
              href="https://www.kompetansenorge.no/kvalitet-i-karriere/"
              target="_blank"
              rel="noreferrer"
            >
              <ImgKvalitet src={kvalitet} alt="" />
            </a>
          </p>
        </FooterContainer>
      </EmptySpace>
    </div>
  );
};

export default Footer;
