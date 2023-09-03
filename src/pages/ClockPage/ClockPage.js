import styled from "styled-components"
import { PageContainer } from "../../assets/styles/pageStyle"
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
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ClockPage() {
    const navigate = useNavigate()
    const [day, setDay] = useState("")
    const [start, setStart] = useState(false)
    function mainButton(){
        if (!start) {
            setStart(true)
        } else if (day){
            navigate(`/${day}`)
        }
    }
    return(
        <PageContainer>
            <Logo/>
            <ButtonsContainer start={start}>
                <MainButton onClick={()=> mainButton()}>{day}</MainButton>
                <Button1 setDay={setDay}></Button1>
                <Button2 setDay={setDay}></Button2>
                <Button3 setDay={setDay}></Button3>
                <Button4 setDay={setDay}></Button4>
                <Button5 setDay={setDay}></Button5>
                <Button6 setDay={setDay}></Button6>
                <Button7 setDay={setDay}></Button7>
                <Button8 setDay={setDay}></Button8>
                <Button9 setDay={setDay}></Button9>
                <Button10 setDay={setDay}></Button10>
                <Button11 setDay={setDay}></Button11>
                <Button12 setDay={setDay}></Button12>
            </ButtonsContainer>     
        </PageContainer>
    )
}

const MainButton = styled.button`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    border: solid black 1px;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
const ButtonsContainer = styled.div`
min-height: 15rem;
min-width: 15rem;
    position: relative;
    button{
        position: absolute;
        top: ${props => !props.start && "50%"};
        left: ${props => !props.start && "50%"};
        transform: ${props => !props.start && "translate(-50%, -50%)"}; 

    }
`