import styled from "styled-components"

export default function Button9({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day9")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    background-color: yellow;
    transition: all 2.6s;
`