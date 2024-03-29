import styled from "styled-components"
import NewLogo from "./NewLogo"
import { useHref, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import darkModePersistence from "../services/darkModePersistence";

export default function Header({resetChoice}){
    const href = useHref()
    const navigate = useNavigate();
    const {setDarkMode, darkMode} = useContext(ThemeContext);
    return(
        <HeaderStyle darkMode={darkMode}>
            <NewLogo></NewLogo>
            {darkMode ? <Sun onClick={()=> darkModePersistence(setDarkMode, darkMode)}/> : <Moon onClick={()=> darkModePersistence(setDarkMode, darkMode)}/>}
            <HeaderOptions>
                <HeaderButton action={"protocolos"} onClick={()=> navigate("/protocols")}>Protocolos de Jogos</HeaderButton>
                <div style={{width: "9px"}}></div>
                <HeaderButton action={"apresentações"} onClick={href!=="/presentations" ? ()=> navigate("/presentations") : ()=> resetChoice()}>Apresentações</HeaderButton>
            </HeaderOptions>
        </HeaderStyle>
    )
}

export const Moon = styled(BsMoonStarsFill)`
    position: absolute;
    right: 15px;
    top: 36px;
    color: black;
    font-size: 30px;
`

export const Sun = styled(FaSun)`
    position: absolute;
    right: 15px;
    top: 33px;
    color: white;
    font-size: 35px;
`

const HeaderOptions = styled.div`
    width: 100%;
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 9px 10px -7px rgba(0,0,0,0.72);
`

const HeaderButton = styled.button`
    height: 100%;
    width: 50%;
    background-color: ${props=> props.action==="protocolos" ? "#393738" : "#ea373f"};
    border: none;
    //border-right: 1px solid #ababab;
    //border-left: 1px solid #ababab;
    margin-bottom: 1px;
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.43);
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    padding: 0;
`


const HeaderStyle = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props=> props.darkMode ? "#010409" : "#cccccc"};
    margin-bottom: 50px;
    position: relative;
`