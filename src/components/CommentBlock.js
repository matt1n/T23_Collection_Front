import { styled } from "styled-components"
import ines from "../assets/imgs/ines.jpg"
import gf from "../assets/imgs/grandefamilia.jpg"
import morte from "../assets/imgs/morte.png"

export default function CommentBlock({comment, setComment}){
    return(<>
        {comment && <CommentPageContainer onClick={()=> setComment(false)}>
        </CommentPageContainer>}
        <CommentContainer comment={comment} onClick={()=>console.log("a")}>
            <span>Out of context pq o editor tá sem tempo:</span>
            <div>
            <img src={gf}></img>
            <img src={ines}></img>
            <img src={morte}></img> 
            </div>
            </CommentContainer></>
    )
}

const CommentPageContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #00000050;
`
const CommentContainer = styled.div`
    position: fixed;
    z-index: 50;
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-top: solid 1px black;
    bottom: ${props=> props.comment ? "0" : "-200px"};
    transition: all .5s;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img{
        max-width: 120px;
        height: 120px;
    }
    div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    width: 100%;
    }
    `