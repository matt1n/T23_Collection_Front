import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate()
    return (
    <LogoStyle onClick={()=> navigate('/')}>Coleção T23
    </LogoStyle>    
    )

}

const LogoStyle = styled.div`
max-width: 400px;
font-size: 5rem;
margin-bottom: 40px;
text-align: center;
font-family: serif;
font-weight: 700;
background-color: #ff0b5b;
color: #fff;
border: solid 1px black;
border-radius: 15px 37% 15px;
cursor: pointer;
`