import { OutlinedButton, SessionDefault, TextH1, TitleDiv } from "../../style";
import {
  ContentDiv,
  ImgFooter,
  ImperialGallery,
  ImperialImage,
  SessionFooter,
  TextContent,
  TextH2ImperialSession,
} from "./style";
import FooterImg from "../../../../assets/ImperialSession/session-footer.png";
import ImperialImg01 from "../../../../assets/ImperialSession/imperial-01.png";
import ImperialImg02 from "../../../../assets/ImperialSession/imperial-02.png";
import ImperialImg03 from "../../../../assets/ImperialSession/imperial-03.png";
import ImperialImg04 from "../../../../assets/ImperialSession/imperial-04.png";

export default function ImperiaisSession() {
  return (
    <SessionDefault backgroundColor="#F2F2F2">
      <TitleDiv>
        <TextH1>Jogos Imperiais</TextH1>
        <TextH2ImperialSession style={{ fontWeight: "bold" }}>
          (Opções de 6 e 8 lugares)
        </TextH2ImperialSession>
      </TitleDiv>

      <ContentDiv>
        <ImperialGallery>
          <ImperialImage src={ImperialImg01} />
          <ImperialImage src={ImperialImg02} />
          <ImperialImage src={ImperialImg03} />
          <ImperialImage src={ImperialImg04} />
        </ImperialGallery>

        <TextContent>
          <TextH2ImperialSession>
            Dê um toque de elegância ao seu evento com nossos jogos imperiais,
            que incluem mesas redondas de 6 ou 8 lugares, cadeiras com capas e
            laços, além de toalhas sofisticadas. Transforme qualquer espaço em
            uma experiência memorável!
          </TextH2ImperialSession>

          <OutlinedButton>Mais informações</OutlinedButton>
        </TextContent>
      </ContentDiv>

      <SessionFooter>
        <ImgFooter src={FooterImg} />
      </SessionFooter>
    </SessionDefault>
  );
}
