import { OutlinedButton, SessionDefault, TextH1 } from "../../style";
import {
  ContentDiv,
  ImgFooter,
  ImperialGallery,
  ImperialImage,
  SessionFooter,
  TextContent,
  TextH2ImperialSession,
  TitleDiv,
} from "./style";
import FooterImg from "../../../../assets/ImperialSession/session-footer.png";

export default function ImperiaisSession() {
  const indexImg = [1, 2, 3, 4];
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
          {indexImg.map((img, i) => (
            <ImperialImage
              key={i}
              src={`src/assets/ImperialSession/imperial-0${img}.png`}
            />
          ))}
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
