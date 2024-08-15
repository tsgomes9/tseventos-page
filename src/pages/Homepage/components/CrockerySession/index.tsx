import { OutlinedButton, SessionDefault, TextH1 } from "../../style";
import {
  CardImg,
  CardItem,
  CardsList,
  CardText,
  CardTitle,
  FooterCrockerySession,
  TitleCrockerySession,
} from "./style";
import CrockeryImg from "../../../../assets/CrockerySession/img-01.jpg";
import Recheaud from "../../../../assets/CrockerySession/img-02.png";
import Bandeja from "../../../../assets/CrockerySession/img-03.png";

export default function CrockerySession() {
  return (
    <SessionDefault backgroundColor="white">
      <TitleCrockerySession>
        <TextH1>Louças</TextH1>
      </TitleCrockerySession>

      <CardsList>
        <CardItem>
          <CardImg src={CrockeryImg} />
          <CardTitle>Pratos, talheres e taça</CardTitle>
          <CardText>
            Kit de louças completo, combinando elegância e praticidade.
          </CardText>
          <OutlinedButton>Mais Informações</OutlinedButton>
        </CardItem>

        <CardItem>
          <CardImg src={Recheaud} />
          <CardTitle>Recheauds</CardTitle>
          <CardText>
            Rechauds de qualidade e elegantes para manter seus pratos quentes e
            saborosos.
          </CardText>
          <OutlinedButton>Mais Informações</OutlinedButton>
        </CardItem>

        <CardItem>
          <CardImg src={Bandeja} />
          <CardTitle>Bandejas</CardTitle>
          <CardText>
            Bandejas sofisticadas, perfeitas tanto para saladas quanto para
            frios.
          </CardText>
          <OutlinedButton>Mais Informações</OutlinedButton>
        </CardItem>
      </CardsList>

      <FooterCrockerySession></FooterCrockerySession>
    </SessionDefault>
  );
}
