import styled from "styled-components"

export default function Button2({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day2")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 33.3%;
    right: 16.6%;
    transform: translate(80%, -70%);
    background-color: purple;
    transition: all 1.2s;
`