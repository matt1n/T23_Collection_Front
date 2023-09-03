import styled from "styled-components"

export default function Button5({setDay, start}){
    return(
        <ButtonStyle start={start} onClick={()=>setDay("day5")}></ButtonStyle>
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
    background-color: aliceblue;
    transition: all 1.4s linear;
`