import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../components/Logo";
import { PageContainer } from "../../assets/styles/PageContainer";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export default function HomePage() {
    const navigate = useNavigate();
    const {darkMode} = useContext(ThemeContext);
    return (
        <PageContainer darkMode={darkMode}>
            <Logo/>
            <InicialButton onClick={()=>navigate("/clock")}>START</InicialButton>
        </PageContainer>
    )
}

const InicialButton = styled.button`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    border: solid black 1px;
`