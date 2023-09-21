import styled from "styled-components"

export default function Button4({setColor, setDay, start}){
    function click(){
        setDay("day4")
        setColor("#00B0FF")
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
    bottom: ${props => !props.start ? "50%" : "33.3%"};
        right: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(50%, 50%)" : "translate(80%, 70%)"};
    background-color: #00B0FF;
    transition: all 1.3s linear;
`