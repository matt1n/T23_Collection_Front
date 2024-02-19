import { useContext, useState } from "react";
import { PageContainer } from "../../assets/styles/PageContainer";

import Header from "../../components/Header";
import { ThemeContext } from "../../contexts/themeContext";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { videoList } from "./VideoList";
import { IoMenu } from "react-icons/io5";


export default function PresentationsPage(){
    const [theme, setTheme] = useState("")
    const [video, setVideo] = useState("")
    const {darkMode} = useContext(ThemeContext);
    function resetChoice(){
        setTheme("")
        setVideo("")
    }
    return(
        <PageContainer darkMode={darkMode}>
            <Header resetChoice={resetChoice}></Header>
            {!theme && Object.keys(videoList).map(t=> <ListOptionsButton darkMode={darkMode} onClick={()=> setTheme(t)}>{t}</ListOptionsButton>)}
            {(theme && !video) && Object.keys(videoList[theme]).map(t=><ListOptionsButton darkMode={darkMode} onClick={()=> setVideo(videoList[theme][t])}>{t}</ListOptionsButton>)}
            <ReactPlayer width={"80%"} height={window.innerWidth<768 ? "300px" : undefined} controls={true} url={video}></ReactPlayer>
            {(theme && video) && <VideoSelect onClick={()=> resetChoice()}><IoMenu/></VideoSelect>}
        </PageContainer>
    )
}

const ListOptionsButton = styled.button`
    height: 60px;
    width: 320px;
    margin-bottom: 1em;
    border-radius: 7px;
    background-color: ${props => props.darkMode ? "transparent" : "#ea373f"};
    border: ${props=> props.darkMode ? "1px solid #ea373f" : "none"};
    color: #fff;
    font-size: 25px;
    font-weight: 700;
`

const VideoSelect = styled.button`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #ea373f;
    border-radius: 5px;
    border: none;
    font-size: 40px;
    color: #fff;
`

const VideoSelectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    width: 100%;
    height: 70%;
    background-color: #ea373f;
    position: fixed;
    bottom: 0;
    right: 0;
`