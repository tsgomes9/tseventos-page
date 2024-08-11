import {
  ButtonHome,
  ContentSession,
  HomeSection,
  ImageArea,
  ImageHome,
  Logo,
  TextArea,
  TextH1,
  TextH2,
} from "./style";
import LogoTs from "../../assets/logo-ts.png";
import ImgHome from "../../assets/img-site.png";
import ImperiaisSession from "./components/ImperiaisSession";

export default function Homepage() {
  return (
    <HomeSection>
      <Logo src={LogoTs} />
      <ContentSession>
        <TextArea>
          <TextH1>Torne sua festa {<br />} inesquecível!</TextH1>
          <TextH2>
            Monte seu orçamento {<br />} e agende seu evento ainda hoje!
          </TextH2>
          <ButtonHome>Conheça nossos Serviços</ButtonHome>
        </TextArea>

        <ImageArea>
          <ImageHome src={ImgHome} />
        </ImageArea>
      </ContentSession>

      <ImperiaisSession />
    </HomeSection>
  );
}
