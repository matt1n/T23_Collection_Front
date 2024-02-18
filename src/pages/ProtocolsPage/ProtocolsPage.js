import { useContext } from "react";
import { PageContainer } from "../../assets/styles/PageContainer";

import Header from "../../components/Header";
import { ThemeContext } from "../../contexts/themeContext";

export default function ProtocolsPage(){
    const {darkMode} = useContext(ThemeContext);
    return(
        <PageContainer darkMode={darkMode}>
            <Header></Header>
        </PageContainer>
    )
}