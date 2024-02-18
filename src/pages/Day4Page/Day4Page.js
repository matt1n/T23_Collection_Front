
import Logo from "../../components/Logo";
import { useContext, useState } from "react";
import Test from "../../components/Pdfa";
import protocolo from "../../assets/pdfs/Protocolo4.pdf"
import { DownloadButton } from "../../components/DownloadButton";
import EditorComment from "../../components/EditorComment";
import CommentBlock from "../../components/CommentBlock";
import Header from "../../components/Header";
import { PageContainer } from "../../assets/styles/PageContainer";
import { ThemeContext } from "styled-components";

export default function Day4Page(){
    const [pdf, setPdf] = useState(false)
    const [comment, setComment] = useState(false)
    function sim(){
        setPdf(!pdf)
    }
    const {darkMode} = useContext(ThemeContext);
    return(
        <PageContainer darkMode={darkMode}>
            <Header></Header>
            <Test url={protocolo}/>
            {pdf && <iframe style={{display: "none"}} src={`${process.env.REACT_APP_BACK_END_URL}/downloads/day4`}></iframe>}
            <DownloadButton sim={()=> sim()}></DownloadButton>
            <CommentBlock comment={comment} setComment={setComment}></CommentBlock>
        </PageContainer>
    )
}

