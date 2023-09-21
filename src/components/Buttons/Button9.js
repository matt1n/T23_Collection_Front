import styled from "styled-components"

export default function Button9({setColor, setDay, start}){
    function click(){
        setDay("day9")
        setColor("#FFC400")
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
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    top: ${props => !props.start ? "50%" : "50%"};
        left: ${props => !props.start ? "50%" : "-10px"};
        transform: ${props => !props.start ? "translate(-50%, -50%)" : "translate(0%, -50%)"}; 
    background-color: #FFC400;
    transition: all 1.8s linear;
`