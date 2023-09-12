import { PageContainer } from "../../assets/styles/pageStyle";
import Logo from "../../components/Logo";
import { useState } from "react";
import Test from "../../components/Pdfa";
import protocolo from "../../assets/pdfs/Protocolo5.pdf"
import { DownloadButton } from "../../components/DownloadButton";
import EditorComment from "../../components/EditorComment";
import CommentBlock from "../../components/CommentBlock";

export default function Day5Page(){
    const [pdf, setPdf] = useState(false)
    const [comment, setComment] = useState(false)
    function sim(){
        setPdf(!pdf)
    }
    return(
        <PageContainer>
            <Logo></Logo>
            <Test url={protocolo}/>
            {pdf && <iframe style={{display: "none"}} src={`${process.env.REACT_APP_BACK_END_URL}/downloads/day5`}></iframe>}
            <DownloadButton sim={()=> sim()}></DownloadButton>
            <EditorComment comment={comment} setComment={setComment}></EditorComment>
            <CommentBlock comment={comment} setComment={setComment}></CommentBlock>
        </PageContainer>
    )
}

