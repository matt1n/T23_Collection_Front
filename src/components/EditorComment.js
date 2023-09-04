import { styled } from "styled-components"
import {BiSolidComment}  from 'react-icons/bi'
import { useState } from "react"

export default function EditorComment({comment, setComment}){
    return(
        <>
        {!comment && <EditorButton
            onClick={()=> setComment(true)}
        >
            <BiSolidComment />
        </EditorButton>}
        </>
    )
}

const EditorButton = styled.button`
    position: fixed;
    bottom: 15px;
    right: 15px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 0;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #84cf3e;
`