import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { PageContainer } from "../../assets/styles/pageStyle";
import Logo from "../../components/Logo";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <PageContainer>
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