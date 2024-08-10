import {
  NavBar,
  NavIcon,
  NavIconDiv,
  NavLink,
  NavList,
  NavTitle,
} from "./styles";
import NavIconSrc from "../../assets/navbar-icon.png";

export default function Navbar() {
  return (
    <NavBar>
      <NavTitle>TS EVENTOS</NavTitle>
      <NavList>
        <NavLink>Orçamento</NavLink>
        <NavLink>Dúvidas Frequentes</NavLink>
        <NavLink>Fale Conosco</NavLink>
      </NavList>

      <NavIconDiv>
        <NavIcon src={NavIconSrc} />
      </NavIconDiv>
    </NavBar>
  );
}
