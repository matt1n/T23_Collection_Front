import styled from "styled-components"

export default function Button8({setColor, setDay, start}){
    function click(){
        setDay("day8")
        setColor("#FFEA00")
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
        left: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(-50%, 50%)" : "translate(-80%, 70%)"};
    /* bottom: 33.3%;
    left: 16.6%;
    transform: translate(-80%, 70%); */
    background-color: #FFEA00;
    transition: all 1.7s linear;
`