import styled from 'styled-components';

export const ClientContainer = styled.div`

    width: 80%;
    height: 80vh;
    padding-bottom: 10rem;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen and (max-width: 600px) {
        width: 90%;
        height: 80vh;
    
    }
`;



export const Clients = styled.div`
    text-align: center;
    padding: 2rem;
    border-radius: 50%;
    user-select: none;

    @media only screen and (max-width: 600px) {
  
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const ClientImage = styled.div`
    width: 7rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
  
    @media only screen and (max-width: 600px) {
        width: 5rem;
    }
`;
export const ClientName = styled.h1`
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 18px;
      text-align: center;
    }
`;
export const ClientReview  = styled.p`
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
      text-align: left;
    }

`;





