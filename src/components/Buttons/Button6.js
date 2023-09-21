import styled from "styled-components"

export default function Button6({setColor, setDay, start}){
    function click(){
        setDay("day6")
        setColor("#00E676")
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
    bottom: ${props => !props.start ? "50%" : "0"};
        left: ${props => !props.start ? "50%" : "50%"};
        transform: ${props => !props.start ? "translate(-50%, 50%)" : "translate(-50%, 20%)"}; 
    /* bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%); */
    background-color: #00E676;
    transition: all 1.5s linear;
`