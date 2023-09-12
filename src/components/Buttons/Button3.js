import styled from "styled-components"

export default function Button3({setColor, setDay, start}){
    function click(){
        setDay("day3")
        setColor("green")
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
    top: ${props => !props.start ? "50%" : "50%"};
        right: ${props => !props.start ? "50%" : "-10px"};
        transform: ${props => !props.start ? "translate(50%, -50%)" : "translate(0%, -50%)"}; 
    background-color: green;
    transition: all 1.2s linear;
`