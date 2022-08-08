import React, { useState }  from "react";
import {useSelector, useDispatch} from "react-redux";

import { addComment, delComment, changeComment } from "../redux/modules/Users";
import styled from "styled-components";

import Button from "../components/Button";




function Diary_writeAll() {

    const comments = useSelector((state)=> state.userReducer)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const dispatch = useDispatch();
    const [newText, setNewText] = useState("")

    const RandomNum = Math.floor(Math.random() * 100);
    
    


    return (
        <div>
        <span>일기 댓글 페이지입니다.</span><br/>
        <br/>
        <input placeholder="이름(5자 이내)" maxLength={5} type="text"  onChange={(e)=>{setTitle(e.target.value)}} /> 
        <input placeholder="댓글을 추가하세요.(100자 이내)" maxLength={100} type="text"  onChange={(e)=> {setContent(e.target.value)}} />
        <Button label="추가하기" onClick={()=>{dispatch(addComment({id: RandomNum, title, content}))}}/>
        <br/>
        <br/>
        <div id="cards">                    
            {comments.map((comment) => {return(
                <>
                    <div key={comment.id}>
                    <h2>{comment.title}</h2>
                    <span>{comment.content}</span>

                    <Button label= '삭제하기' onClick={() => dispatch(delComment(comment.id))}/>
                    <Button label='수정하기'/></div><br />
                    <div className="changeDiv"><input type='text' onChange={(e)=>{setNewText(e.target.value)}}/><Button label = '수정완료' onClick={() => dispatch(changeComment({new: newText, id : comment.id, content : comment.content}))}/></div>
                </>
            )})}
        </div>
    </div>
    );
}


export default  Diary_writeAll

