import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PolicyContainer = styled.div`
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const PolicyTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.8em;
  text-align: center;
  color: black;
  padding-bottom: 1rem;
  font-weight: 500;


  @media screen and (max-width: 600px){
    width: 90%;
    font-size: 0.9rem;
}

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 0.9rem;
  }

`;

export const PolicySubTitle = styled.h2`
  font-weight: 100;
  font-size: 1em;
  font-size: 0.9em;
  text-align: left;
  color: black;
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
  padding: 1rem 2rem 0 5rem;
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