import styled from "styled-components";
import { OutlinedButton } from "../../style";

export const TitleCrockerySession = styled.div`
  height: 15vh;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 800px) {
    height: 12vh;
  }
`;

export const CardsList = styled.div`
  padding: 0 2rem;
  justify-content: center;
  gap: 4rem;
  display: flex;
  height: 75vh;

  @media screen and (max-width: 1250px) {
    gap: 2rem;
  }

  @media screen and (max-width: 1020px) {
    gap: 1rem;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 80vh;
  }
`;

export const CardItem = styled.div`
  height: 100%;
  width: calc(30% - 1rem);
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    text-align: left;
    justify-content: start;
  }
`;

export const CardImg = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardImgContainer = styled.div`
  height: 30vh;
  width: 30vh;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 1020px) {
    height: 25vh;
    width: 25vh;
  }

  @media screen and (max-width: 900px) {
    height: 22vh;
    width: 22vh;
  }

  @media screen and (max-width: 800px) {
    min-height: 10rem;
    min-width: 10rem;
    border-radius: 20px;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 80%;
    position: relative;
  }
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  color: #3981e9;
  height: 3.5rem;

  @media screen and (max-width: 1350px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    height: 2rem;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    height: 40%;
  }
`;

export const CardText = styled.h2`
  font-size: 1.2rem;
  color: grey;
  height: 6rem;
  font-family: "Roboto Thin";

  @media screen and (max-width: 1020px) {
    font-size: 1rem;
    height: 5rem;
  }

  @media screen and (max-width: 800px) {
    height: 40%;
    font-size: 0.9rem;
    width: 100%;
  }
`;

export const OutlinedButtonResponsive = styled(OutlinedButton)`
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    height: 3rem;
    font-size: 1rem;
    max-width: 80%;
    margin: 0;
  }
`;

export const FooterCrockerySession = styled.div`
  height: 10vh;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 5vh;
  }
`;
