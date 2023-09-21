import styled from "styled-components"

export default function Button10({setColor, setDay, start}){
    function click(){
        setDay("day10")
        setColor("#FF9100")
    }
    return(
        <ButtonStyle start={start} onClick={()=>click()}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: ${props => !props.start ? "50%" : "33.3%"};
        left: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(-50%, -50%)" : "translate(-80%, -70%)"};
    background-color: #FF9100;
    transition: all 1.9s linear;
`