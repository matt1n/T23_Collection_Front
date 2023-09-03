import styled from "styled-components"

export default function Button5({setDay}){
    return(
        <ButtonStyle onClick={()=>setDay("day5")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    bottom: 16.6%;
    right: 16.6%;
    transform: translate(0, 70%);
    background-color: aliceblue;
    transition: all 1.8s;
`