import { Column } from "../styles/styledIntro";
import priceicon from "./priceicon.png";
import {
  BoxPrice,
  ContainerGroup,
  ImgPrice,
  TextYellow,
  Underline,
} from "./StyledPrice";

const PriceBoxOne = () => {
  return (
    <div>
      <BoxPrice>
        <ImgPrice src={priceicon} alt="icon" />
        <h2>Priser</h2>
        <TextYellow>Studieveiledning</TextYellow>
        <p>3 samlinger hvor en hver økt varer 2 timer</p>
        <p>Øvelser mellom hver økt</p>
        <p>
          Individuell oppmerksomhet på din <br /> karriereretning
        </p>
        <p>Spesifikke råd tilpasset din situasjon</p>
        <Underline />
        <Column>
          <ContainerGroup>
            <p>Individuelt</p>
            <p>6570,-</p>
          </ContainerGroup>
          <ContainerGroup>
            <p>Grupper</p>
            <p>4570,-</p>
          </ContainerGroup>
        </Column>
      </BoxPrice>
    </div>
  );
};

export default PriceBoxOne;
