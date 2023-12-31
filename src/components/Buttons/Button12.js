import styled from "styled-components"

export default function Button12({setColor, setDay, start}){
    function click(){
        setDay("day12")
        setColor("#FF1744")
    }
    return(
        <ButtonStyle start={start} disabled onClick={()=>click()}></ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: solid black 1px;
    position: absolute;
    top: ${props => !props.start ? "50%" : "0"};
        left: ${props => !props.start ? "50%" : "50%"};
        transform: ${props => !props.start ? "translate(-50%, -50%)" : "translate(-50%, -20%)"};
    /* top: 0;
    left: 50%;
    transform: translate(-50%, -20%); */
    background-color: #FF1744;
    transition: all 2.1s linear;
`