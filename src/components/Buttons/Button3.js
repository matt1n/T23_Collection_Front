import styled from "styled-components"

export default function Button3({setDay}){
    return(
        <ButtonStyle disabled onClick={()=>setDay("day3")}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(20%, -50%);
    background-color: green;
    transition: all 1.4s;
`