import styled from "styled-components"
import Logo from "../../components/Logo"
import Button1 from "../../components/Buttons/Button1"
import Button2 from "../../components/Buttons/Button2"
import Button3 from "../../components/Buttons/Button3"
import Button4 from "../../components/Buttons/Button4"
import Button5 from "../../components/Buttons/Button5"
import Button6 from "../../components/Buttons/Button6"
import Button7 from "../../components/Buttons/Button7"
import Button8 from "../../components/Buttons/Button8"
import Button9 from "../../components/Buttons/Button9"
import Button10 from "../../components/Buttons/Button10"
import Button11 from "../../components/Buttons/Button11"
import Button12 from "../../components/Buttons/Button12"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import knock from "../../assets/imgs/knocking.png"
import sísifo from "../../assets/imgs/sísifoO.png"
import pcorda from "../../assets/imgs/pcorda.png"
import fantoche from "../../assets/imgs/fantoche.png"
import onibus from "../../assets/imgs/Onibus.png"
import silencio from "../../assets/imgs/Silence.png"
import balao from "../../assets/imgs/balaocerto.png"
import plateia from "../../assets/imgs/plateia.png"
import polaroid from "../../assets/imgs/polaroid.png"
import lobo from "../../assets/imgs/wolf.png"
import Header from "../../components/Header"
import { PageContainer } from "../../assets/styles/PageContainer"
import { ThemeContext } from "../../contexts/themeContext"

export default function ClockPage() {
    function fday(){
        switch(day){
            case 'day1':
                return lobo;
            case 'day2':
                return silencio;
            case 'day3':
                return sísifo
            case 'day4':
                return onibus;
            case 'day5':
                return knock;
            case 'day6':
                return fantoche;
            case 'day7':
                return pcorda;
            case 'day8':
                return balao;
            case 'day9':
                return plateia;
            case 'day10':
                return polaroid;
            default:
                return "";      
    }
        
    }
    const navigate = useNavigate()
    const [day, setDay] = useState("")
    const [start, setStart] = useState(false)
    const [color, setColor] = useState("")
    function mainButton(){
        if (!start) {
            setStart(true)
        } else if (day){
            navigate(`/${day}`)
        }
    }

    const {darkMode} = useContext(ThemeContext);
    return(
        <PageContainer darkMode={darkMode}>
            <Header></Header>
            <ButtonsContainer start={start}>
                <MainButton color={color} start={start} onClick={()=> mainButton()}>
                    {day && <img src={fday()}></img>}
                    </MainButton>
                <Button1 setColor={setColor} start={start} setDay={setDay}></Button1>
                <Button2 setColor={setColor} start={start} setDay={setDay}></Button2>
                <Button3 setColor={setColor} start={start} setDay={setDay}></Button3>
                <Button4 setColor={setColor} start={start} setDay={setDay}></Button4>
                <Button5 setColor={setColor} start={start} setDay={setDay}></Button5>
                <Button6 setColor={setColor} start={start} setDay={setDay}></Button6>
                <Button7 setColor={setColor} start={start} setDay={setDay}></Button7>
                <Button8 setColor={setColor} start={start} setDay={setDay}></Button8>
                <Button9 setColor={setColor} start={start} setDay={setDay}></Button9>
                <Button10 setColor={setColor} start={start} setDay={setDay}></Button10>
                <Button11 setColor={setColor} start={start} setDay={setDay}></Button11>
                <Button12 setColor={setColor} start={start} setDay={setDay}></Button12>
            </ButtonsContainer>    
        </PageContainer>
    )
}

const MainButton = styled.button`
    height: ${props => !props.start===true ? "8rem" : "10rem"};
    width: ${props => !props.start===true ? "8rem" : "10rem"};
    border-radius: 50%;
    border: solid black 1px;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    transition: all 1s;
    background-color: ${props=> props.color ? props.color : "#fff"};
    font-weight: 700;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
min-height: 15rem;
width: 15rem;
    position: relative;
    img{
        max-height: 70%;
    }
`