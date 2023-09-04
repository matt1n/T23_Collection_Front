import { styled } from "styled-components"

export function DownloadButton({sim}){
    return(
        <DButton onClick={()=> sim()}> DOWNLOAD</DButton>
    )
}

const DButton = styled.button`
width: 240px;
margin-bottom: 40px;
border: 1px solid #000;
background-color: #84cf3e;

  color: white;


    display: block;

    padding: 17px 30px;
    font-size: .75em;
    letter-spacing: .35em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid #000;
    border-radius: 10px;
    transition: all .2s ease;
`