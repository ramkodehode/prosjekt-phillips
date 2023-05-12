import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PolicyContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0 3rem 0 3rem;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;

  }
`;


export const PolicyTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center;
  color: black;
  padding-bottom: 1rem;
  font-weight: 500;

`;
  

export const PolicySubTitle = styled.h2`
  font-weight: 100;
  font-size: 1em;
  font-size: 0.9em;
  text-align: left;
  color: black;

  
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0;
    font-size: 14px;
  }
  
`;

export const PolicyLevel = styled.p`
  font-size: 1em;
  text-align: left;
  color: black;
`;

export const PolicyInfo = styled.p`
  padding-top: 0.5rem;
  text-align: left;
`;

export const OrgNr = styled.div`
  color: #e5701b;
`;

export const PolicySection = styled.div`
  padding: 2rem 2rem 0 5rem;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0;
    font-size: 14px;
  }

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




