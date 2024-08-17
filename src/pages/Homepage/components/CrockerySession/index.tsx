import { SessionDefault, TextH1 } from "../../style";
import {
  CardImg,
  CardImgContainer,
  CardItem,
  CardsList,
  CardText,
  CardTextContent,
  CardTitle,
  FooterCrockerySession,
  OutlinedButtonResponsive,
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
          <CardImgContainer>
            <CardImg src={CrockeryImg} />
          </CardImgContainer>

          <CardTextContent>
            <CardTitle>Pratos, talheres e taça</CardTitle>
            <CardText>
              Kit de louças completo, combinando elegância e praticidade.
            </CardText>
            <OutlinedButtonResponsive>
              Mais Informações
            </OutlinedButtonResponsive>
          </CardTextContent>
        </CardItem>

        <CardItem>
          <CardImgContainer>
            <CardImg src={Recheaud} />
          </CardImgContainer>

          <CardTextContent>
            <CardTitle>Recheauds</CardTitle>
            <CardText>
              Rechauds elegantes para manter seus pratos quentes e saborosos.
            </CardText>
            <OutlinedButtonResponsive>
              Mais Informações
            </OutlinedButtonResponsive>
          </CardTextContent>
        </CardItem>

        <CardItem>
          <CardImgContainer>
            <CardImg src={Bandeja} />
          </CardImgContainer>
          <CardTextContent>
            <CardTitle>Bandejas</CardTitle>
            <CardText>
              Bandejas sofisticadas, perfeitas tanto para saladas quanto para
              frios.
            </CardText>
            <OutlinedButtonResponsive>
              Mais Informações
            </OutlinedButtonResponsive>
          </CardTextContent>
        </CardItem>
      </CardsList>

      <FooterCrockerySession></FooterCrockerySession>
    </SessionDefault>
  );
}
