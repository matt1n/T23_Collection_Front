import styled from "styled-components"

export default function Button8({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day8")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    bottom: 33.3%;
    left: 16.6%;
    transform: translate(-80%, 70%);
    background-color: purple;
    transition: all 2.4s;
`