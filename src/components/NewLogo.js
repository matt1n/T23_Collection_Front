import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NewLogo() {
    const navigate = useNavigate();
    return (
        <NewLogoStyle onClick={()=>navigate("/")}>
        <LogoStyleCircle>
            <p>T23</p>
        </LogoStyleCircle>
        <SquareStyle>
            <p>CO</p>
            <p>LE</p>
            <p>ÇÃO</p>
        </SquareStyle>
        </NewLogoStyle>
    )

}

const NewLogoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100px;
    width: 180px;
`

const LogoStyleCircle = styled.div`
margin-right: -5px;
display: flex;
align-items: center;
justify-content: center;
height: 90px;
width: 90px;
font-size: 2rem;
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

const SquareStyle = styled.div`
    margin-left: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90px;
    width: 90px;
    text-align: center;
    font-family: serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    background-color: #393738;
    p{
        line-height: 1.1;
    }
`