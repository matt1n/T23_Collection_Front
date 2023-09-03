import styled from "styled-components"

export default function Button1({setDay, start}){
    return(
        <Button1Style start={start} disabled onClick={()=>setDay("day1")}></Button1Style>
    )
}

const Button1Style = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: ${props => !props.start ? "50%" : "16.6%"};
        right: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(50%, -50%)" : "translate(0, -70%)"};
    background-color: aliceblue;
    &:disabled{
	background-color: gray;
    transition: all 1s linear;
}
`