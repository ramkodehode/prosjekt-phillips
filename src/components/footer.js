import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

/*const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;*/

export const EmptySpace = styled.div`
  width: auto;
  height: 130px;
  margin-top: 100px;
  background: rgba(0, 0, 0, 0.8);
  color: white;

  @media only screen and (max-width: 40em) {
    width: auto;
    height: 80px;
  }
`;

export const FooterContainer = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 25px;
  margin: 0 auto;

  @media only screen and (max-width: 40em) {
    font-size: 0.8rem;
    padding: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #e5701b;
  }
`;

const Footer = () => {
  return (
    <div>
      <EmptySpace>
        <FooterContainer>
          <p>Phillips Karriere</p>

          <p>
            Copyright 2023 © All Rights Reserved. <br />
            Built by K3
          </p>

          <StyledLink to="/privacy">Personvernerklæring</StyledLink>
          
        </FooterContainer>
      </EmptySpace>
    </div>
  );
};

export default Footer;
