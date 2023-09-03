import styled from "styled-components"

export default function Button11({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day11")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 16.6%;
    left: 16.6%;
    transform: translate(0, -70%);
    background-color: aliceblue;
    transition: all 3s;
`