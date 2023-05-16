import styled from "styled-components";
import { Link } from "react-router-dom";

export const PolicyContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0 3rem 0 3rem;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    margin: 0 3rem 0 3rem;
  }

  @media screen and (max-width: 2400px) {
    width: 90%;
    margin: 0 3rem 0 3rem;
  }
`;

export const PolicyTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center;
  color: black;
  padding-bottom: 1rem;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 0.7rem;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 1rem;
    margin: 0 3rem 0 3rem;
  }

  @media screen and (min-width: 2400px) {
    width: 100%;
    font-size: 3.7rem;
  }
`;

export const PolicySubTitle = styled.h2`
  font-weight: 100;
  font-size: 0.9rem;
  text-align: left;
  color: black;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0;
    font-size: 0.6rem;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 2400px) {
    width: 100%;
    font-size: 2.3rem;
  }
`;

export const PolicyLevel = styled.p`
  font-size: 1rem;
  text-align: left;
  color: black;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 1rem;
  }

  @media screen and (min-width: 2400px) {
    width: 100%;
    font-size: 2.3rem;
  }
`;

export const PolicyInfo = styled.p`
  padding-top: 0.5rem;
  text-align: left;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0;
    font-size: 0.8rem;
  }
  
  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 1rem;
  }

  @media screen and (min-width: 2400px) {
    width: 100%;
    font-size: 2.3rem;
  }
`;

export const PolicySection = styled.p`
  padding-top: 0.5rem;
  text-align: left;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 0.7rem;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 1rem;
  }

  @media screen and (min-width: 2400px) {
    width: 100%;
    font-size: 2.3rem;
    margin: 0 3rem 0 5rem;
  }
`;

export const OrgNr = styled.div`
  color: #e5701b;
`;

export const Li = styled.li``;

export const Ul = styled.ul``;

export const WebLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #e5701b;
  }
`;
