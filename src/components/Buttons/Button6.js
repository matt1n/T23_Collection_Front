import styled from "styled-components"

export default function Button6({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day6")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%);
    background-color: blue;
    transition: all 2s;
`