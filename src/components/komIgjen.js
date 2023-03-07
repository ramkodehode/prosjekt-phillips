import styled from "styled-components";
import { IntroText, Tittel } from "./styles/styledIntro";

export const BoxToo = styled.div`
  width: auto;
  height: 35rem;
  margin: 0 auto;
  z-index: -1;

  background: #fbd19c;

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

export const KomIgjenText = styled.section`
  padding: 5rem;
  text-align: center;
`;

const KomIgjen = () => {
  return (
    <div>
      <BoxToo>
        <KomIgjenText>
          <Tittel>Så la oss komme i gang!</Tittel>
          <IntroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </IntroText>
        </KomIgjenText>
      </BoxToo>
    </div>
  );
};

export default KomIgjen;
