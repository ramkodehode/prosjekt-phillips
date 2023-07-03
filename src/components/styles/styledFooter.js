import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptySpace = styled.div`
  width: auto;
  height: 35vh;
  margin-top: 5rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;

  @media only screen and (max-width: 48em) {
    height: 60vh;
    padding: 1rem;
  }

  @media only screen and (min-width: 49em) {
    height: 60vh;
  }

  @media only screen and (min-width: 981px) {
    height: 41vh;
  }
`;

export const FooterContainer = styled.div`
  justify-content: space-around;
  text-align: center;
  display: flex;
  padding: 2.5rem;
  margin: 0 auto;

  @media only screen and (max-width: 48em) {
    font-size: 0.8rem;

    display: block;
  }

  @media only screen and (min-width: 49em) {
    font-size: 1.2rem;

    display: block;
  }

  @media only screen and (min-width: 981px) {
    font-size: 1rem;
    justify-content: space-around;
    text-align: center;
    display: flex;
    padding: 2.5rem;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  padding-top: 1rem;
  text-decoration: none;

  &:hover {
    color: #e5701b;
  }

  @media only screen and (max-width: 40em) {
    padding-top: 13px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 1.42rem;
  }

  @media only screen and (min-width: 2560px) {
    padding-top: 2rem;
  }
`;

export const ImgKvalitet = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 10vh;
  padding: 1em 0;
`;
