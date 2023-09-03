import styled from "styled-components"

export default function Button1({setDay}){
    return(
        <Button1Style disabled onClick={()=>setDay("day1")}></Button1Style>
    )
}

const Button1Style = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: 16.6%;
    right: 16.6%;
    transform: translate(0, -70%);
    background-color: aliceblue;
    &:disabled{
	background-color: gray;
    transition: all 1s;
}
`