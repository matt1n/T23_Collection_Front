import styled from "styled-components"

export default function Button5({setDay, start, setColor}){
    function click(){
        setDay("day5")
        setColor("#31ffb2")
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
    bottom: ${props => !props.start ? "50%" : "16.6%"};
        right: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(50%, 50%)" : "translate(0, 70%)"};
    background-color: #31ffb2;
    transition: all 1.4s linear;
`