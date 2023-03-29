import styled from "styled-components";
import { Tittel } from "./styles/styledIntro";

export const BoxToo = styled.div`
  width: auto;
  height: 25rem;
  margin: 0 auto;
  z-index: -1;

  background: #fbd19c;

  @media only screen and (max-width: 40em) {
    width: auto;
    height: 15rem;
  }
`;

export const KomIgjenText = styled.section`
  padding: 5rem;
  text-align: center;

  @media only screen and (max-width: 40em) {
    padding: 1rem;
  }
`;

const KomIgjen = () => {
  return (
    <div>
      <BoxToo>
        <KomIgjenText>
          <Tittel>Så la oss komme i gang!</Tittel>
        </KomIgjenText>
      </BoxToo>
    </div>
  );
};

export default KomIgjen;
