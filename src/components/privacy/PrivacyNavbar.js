import {
  NavbarContainer,
  LeftContainer,
  NavbarInnerContainer,
  Logo,
  LogoText,
  LogoContainer,
  LogoLink,
} from "./PrivacyNavbar.styled";

import ImgLogo from "../../components/navbar/assets/ImgLogo.png";

const PrivacyNavbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoLink to="/">
              <LogoContainer>
                <Logo src={ImgLogo}></Logo>
                <LogoText> </LogoText>
              </LogoContainer>
            </LogoLink>
          </LeftContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </>
  );
};

export default PrivacyNavbar;
