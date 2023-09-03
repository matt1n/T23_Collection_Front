import { PageContainer } from "../../assets/styles/pageStyle";
import Logo from "../../components/Logo";
import { useState } from "react";
import Test from "../../components/Pdfa";
import darlo from "../../assets/pdfs/Darlo.pdf"
import { DownloadButton } from "../../components/DownloadButton";

export default function Day5Page(){
    const [pdf, setPdf] = useState(false)
    function sim(){
        setPdf(!pdf)
    }
    return(
        <PageContainer>
            <Logo></Logo>
            <Test url={darlo}/>
            {pdf && <iframe style={{display: "none"}} src={`${process.env.REACT_APP_BACK_END_URL}/downloads/day5`}></iframe>}
            <DownloadButton sim={()=> sim()}></DownloadButton>
        </PageContainer>
    )
}

