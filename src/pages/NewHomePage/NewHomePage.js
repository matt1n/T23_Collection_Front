import { useContext } from "react";
import { PageContainer } from "../../assets/styles/PageContainer";

import Header from "../../components/Header";
import NewLogo from "../../components/NewLogo";
import { ThemeContext } from "styled-components";


export default function NewHomePage(){
    const {darkMode} = useContext(ThemeContext);
    return(
        <PageContainer darkMode={darkMode}>
            <Header/>
        </PageContainer>
    )
}