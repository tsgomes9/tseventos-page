import styled from "styled-components";


export const HomeSection = styled.section`
    height: 92vh;
    border: 1px solid white;
`

export const Logo = styled.img`
    height: 24vh;
    display: block;
    margin: 1rem auto;

    @media screen and (max-width: 1100px){
        height: 20vh;
    }

    @media screen and (max-width: 600px){
        margin-bottom: 2rem;
    }
`

export const ContentSession = styled.div`
    display: flex;

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`

export const TextArea = styled.div`
    width: 40%;
    height: 50vh;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1100px){
        height: 40vh;
        width: 100%;
        margin: 0;
        align-items: center;
        justify-content: center;
    }
`

export const TextH1 = styled.h1`
    color: #3981E9;
    font-size: 64px;

    @media screen and (max-width: 1250px){
        font-size: 54px;
        margin-top: 2rem;
    }
    @media screen and (max-width: 1100px){
        margin-top: 0;
        font-size: 48px;
        text-align: center;
    }
    
`

export const TextH2 = styled.h2`
    color: grey;
    font-size: 28px;
    font-family: 'Roboto Thin';
    font-weight: lighter;
    margin-top: 20px;

    @media screen and (max-width: 1250px){
        font-size: 24px;
    }

    @media screen and (max-width: 1100px){
        text-align: center;
        font-family: 'Roboto Light';
    }
`

export const ButtonHome = styled.button`
    border: none;
    background-color: #F6954B;
    width: 18rem;
    height: 4rem;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;

    &:hover{
        background-color: #E87237;
        transition: 0.4s;
    }

    @media screen and (max-width: 1100px){
       margin: 20px auto;
    }
`

export const ImageArea = styled.div`
    width: 60%;
    height: 60vh;
    margin-right: 4rem;
    display: flex;
    
    @media screen and (max-width: 1100px){
        height: 27vh;
        width: 90%;
        margin: auto;
        position: relative;
    }

    @media screen and (max-width: 600px){
        height: 23vh;
        width: 100%;
        position: relative;
    }
    
`

export const ImageHome = styled.img`
    width: 100%;
    image-rendering: auto;
    display: block;
    margin: auto;

    @media screen and (max-width: 1100px){
        max-height: 27vh;
        position: absolute;
        bottom: 0;
    }
`