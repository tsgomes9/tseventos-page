import styled from "styled-components";
import { TextH2 } from "../../style";

export const TitleDiv = styled.div`
    height: 25vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;

    @media screen and (max-width: 800px){
        height: 15vh;
    }
`

export const ContentDiv = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;

    @media screen and (max-width: 1250px){
        flex-direction: column;
    }

    @media screen and (max-width: 800px){
        height: 75vh;
    }
`

export const ImperialGallery = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 2rem 1rem 4rem;

    @media screen and (max-width: 1250px){
        width: 100%;
        flex-wrap: nowrap;
        justify-content: center;
        ;
    }

    @media screen and (max-width: 800px){
        width: 70%;
        min-width: 25rem;
        height: 60%;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
        margin: auto;
        ;
    }

`

export const ImperialImage = styled.img`
    height: calc(50% - 1rem);
    width: calc(50% - 1rem);
    border-radius: 10px;

    @media screen and (max-width: 1250px){
        height: 100%;
        max-height: 10rem;
        max-width: 10rem;
    }

    @media screen and (max-width: 800px){
        width: calc(50% - 1rem);
        height: 50%;
        flex-wrap: wrap;
        justify-content: center;
        ;
    }
`

export const TextContent = styled.div`
    width: 60%;
    padding: 1rem 4rem 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1250px){
        width: 100%;
        padding: 0 2rem;
    }   

`

export const TextH2ImperialSession = styled(TextH2)`
    @media screen and (max-width: 800px){
        font-size: 16px;
        margin-top: 10px;
    }   
`

export const SessionFooter = styled.div`
    height: 15vh;
    width: 100%;

    @media screen and (max-width: 800px){
        height: 10vh;
    }
`
export const ImgFooter = styled.img`
    width: 100%;
    height: 100%;
`

