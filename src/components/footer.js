import React from "react";

import { OrgNr } from "./privacy/Privacy.styled";
import kvalitet from "./img/kvalitet.png";
import {
  EmptySpace,
  FooterContainer,
  ImgKvalitet,
  StyledLink,
} from "./styles/styledFooter";

const Footer = () => {
  return (
    <div>
      <EmptySpace>
        <FooterContainer>
          <p>
            Phillips Karriere <br /> <br /> Organisasjonsnummer:{" "}
            <OrgNr>829590352. </OrgNr>
          </p>

          <StyledLink to="/privacy">Personvernerklæring</StyledLink>

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
