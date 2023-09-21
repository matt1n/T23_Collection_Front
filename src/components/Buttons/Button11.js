import styled from "styled-components"

export default function Button11({setColor, setDay, start}){
    function click(){
        setDay("day11")
        setColor("#FF3D00")
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
    top: ${props => !props.start ? "50%" : "16.6%"};
        left: ${props => !props.start ? "50%" : "16.6%"};
        transform: ${props => !props.start ? "translate(-50%, -50%)" : "translate(0, -70%)"};
    background-color: #FF3D00;
    transition: all 2s linear;
`