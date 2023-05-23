import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export const EmptySpace = styled.div`
  width: auto;
  height: 25vh;
  margin-top: 5rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
`;

export const FooterContainer = styled.div`
  justify-content: space-around;
  text-align: center;
  display: flex;
  padding: 2.5rem;
  margin: 0 auto;

  @media only screen and (max-width: 40em) {
    font-size: 0.8rem;
    padding: 10px;
    display: block;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  padding-top: 1rem;
  text-decoration: none;

  &:hover {
    color: #ffcb8d;
  }

  @media only screen and (max-width: 40em) {
    padding-top: 13px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 1.42rem;
  }
`;

const Footer = () => {
  return (
    <div>
      <EmptySpace>
        <FooterContainer>
          <p>Phillips Karriere</p>

          <StyledLink to="/privacy">Personvernerklæring</StyledLink>

          <p>
            Copyright 2023 © All Rights Reserved. <br />
            Built by K3
          </p>
        </FooterContainer>
      </EmptySpace>
    </div>
  );
};

export default Footer;
