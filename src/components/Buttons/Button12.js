import styled from "styled-components"

export default function Button12({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day12")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -20%);
    background-color: red;
    transition: all 3.2s;
`