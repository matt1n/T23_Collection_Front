import styled from "styled-components"

export default function Button2({setColor, setDay, start}){
    function click(){
        setDay("day2")
        setColor("#651FFF")
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
        right: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(50%, -50%)" : "translate(80%, -70%)"};
    /* top: 33.3%;
    right: 16.6%;
    transform: translate(80%, -70%); */
    background-color: #651FFF;
    transition: all 1.1s linear;
`