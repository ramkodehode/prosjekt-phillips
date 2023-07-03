import React from "react";

import { OrgNr } from "./privacy/Privacy.styled";
import kvalitet from "./img/kvalitet.png";
import {
  EmptySpace,
  FooterContainer,
  ImgKvalitet,
  StyledLink,
} from "./styles/styledFooter";
import { AiFillFacebook } from "react-icons/ai";

import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkFacebook = styled.a`
  text-decoration: none;

  color: white;

  font-size: 2rem;

  &:hover {
    color: #e5701b;
  }
`;

export const DivFacebook = styled.div`
  padding: 1rem;
`;

export const FooterLabel = styled.label``;

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

            <DivFacebook>
              <LinkFacebook
                href="https://www.facebook.com/profile.php?id=100094047773942"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </LinkFacebook>
            </DivFacebook>
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
