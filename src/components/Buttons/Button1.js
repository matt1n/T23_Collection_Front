import styled from "styled-components"

export default function Button1({setColor, start, setDay}){
    function click(){
        setDay("day1")
        setColor("#D500F9")
    }
    return(
        <Button1Style start={start} onClick={()=>click()}></Button1Style>
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
    background-color: #D500F9;
    transition: all 1s linear;
    &:disabled{
    transition: all 1s linear;
}
`