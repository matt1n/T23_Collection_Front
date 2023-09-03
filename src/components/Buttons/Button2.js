import styled from "styled-components"

export default function Button2({setDay, start}){
    return(
        <ButtonStyle start={start} disabled onClick={()=>setDay("day2")}></ButtonStyle>
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
    background-color: purple;
    transition: all 1.1s linear;
`