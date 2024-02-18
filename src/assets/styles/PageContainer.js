import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.darkMode ? "#161b22" : "#fff"};
    //justify-content: center;
`