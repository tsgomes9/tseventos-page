import styled from "styled-components";


export const NavBar = styled.nav`
    height: 8vh;
    width: 100%;
    display:flex;
    justify-content: space-between;
    background: #3981E9;
    padding: 0.5rem 4rem;
    color: white;

    @media screen and (max-width:700px){
        padding: 0.5rem 2rem;
        margin: 0;
        width: 100%;
    }
`

export const NavTitle = styled.h1`
    letter-spacing: 0.5rem;
    font-size: 16px;
    display:flex;
    align-items: center;
`

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 2rem;

    @media screen and (max-width:700px){
        display: none;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-family: 'Roboto Light';
    font-size: 14px;
    display: flex;
    align-items: center;

    &:hover{
        font-weight: bold;
    }
`

export const NavIconDiv = styled.div`
    width: 6vw;
    height: 6vh;
    padding: 2px;
    border-radius: 100%;  
    display: none;
    cursor: pointer;    

    &:hover{
        background-color: #1c67d4;
        transition: 0.5s;
    }
    
    @media screen and (max-width:700px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const NavIcon = styled.img`
    width: 70%;
    display: block;
`