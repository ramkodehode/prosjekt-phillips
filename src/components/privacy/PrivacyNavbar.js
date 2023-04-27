import {
  NavbarContainer,
  LeftContainer,
  NavbarInnerContainer,
  Logo,
  LogoText,
  LogoContainer,
  LogoLink,
} from './PrivacyNavbar.styled';

import LogoImg from '../../components/navbar/assets/image.png';

const PrivacyNavbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoLink to="/">
              <LogoContainer>
                <Logo src={LogoImg}></Logo>
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
