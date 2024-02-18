import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../components/Logo";
import { PageContainer } from "../../assets/styles/PageContainer";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { Moon, Sun } from "../../components/Header";
import NewLogo from "../../components/NewLogo";
import darkModePersistence from "../../services/darkModePersistence";

export default function HomePage() {
    const navigate = useNavigate();
    const {setDarkMode, darkMode} = useContext(ThemeContext);
    return (
        <HomePageContainer darkMode={darkMode}>
            <HomeLogo onClick={()=>navigate("/")}>
        <HomeLogoCircle>
            <p>T23</p>
        </HomeLogoCircle>
        <HomeLogoSquare>
            <p>CO</p>
            <p>LE</p>
            <p>ÇÃO</p>
        </HomeLogoSquare>
        </HomeLogo>

        <HomeButtonProtocol darkMode={darkMode} onClick={()=> navigate("/protocols")}>Protocolos de Jogos</HomeButtonProtocol>
        <HomeButtonPresentation darkMode={darkMode} onClick={()=> navigate("/presentations")}>Apresentações</HomeButtonPresentation>
        <DarkModeButton onClick={()=> darkModePersistence(setDarkMode,darkMode)}>{darkMode ? <Sun/>: <Moon/>}</DarkModeButton>
        </HomePageContainer>
    )
}

const DarkModeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    right: 15px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: none;
    
    svg{
        position: initial;
        top: 0;
        right: 0;
    }
`

const HomeButtonProtocol = styled.button`
    height: 60px;
    width: 320px;
    margin-bottom: 1em;
    border-radius: 7px;
    background-color: ${props => props.darkMode ? "transparent" : "#393738"};
    border: ${props=> props.darkMode ? "1px solid #ffffff" : "none"};
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
`
const HomeButtonPresentation = styled(HomeButtonProtocol)`
    margin-bottom: none;
    background-color: ${props => props.darkMode ? "transparent" : "#ea373f"};
    border: ${props=> props.darkMode ? "1px solid #ea373f" : "none"};
    color: ${props => props.darkMode ? "#ea373f" : "#ffffff"};
`

const HomePageContainer = styled(PageContainer)`
    padding-top: 1em;
    justify-content: center;
`

const HomeLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100px;
    width: 300px;

    margin-bottom: 8em;
`

const HomeLogoCircle = styled.div`
margin-right: -5px;
display: flex;
align-items: center;
justify-content: center;
height: 150px;
width: 150px;
font-size: 2.5rem;
text-align: center;
font-family: serif;
font-weight: 700;
background-color: #ea373f;
color: #fff;
//border: solid 1px black;
border-radius: 100%;
cursor: pointer;
z-index: 2;
`

const HomeLogoSquare = styled.div`
    margin-left: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 150px;
    text-align: center;
    font-family: serif;
    font-weight: 700;
    font-size: 2rem;
    color: #fff;
    background-color: #393738;
    p{
        line-height: 1.1;
    }
`