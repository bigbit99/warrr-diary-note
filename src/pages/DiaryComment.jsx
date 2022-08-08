import React, { useState }  from "react";
import {useSelector, useDispatch} from "react-redux";
import { addComment, delComment, changeComment } from "../redux/Users";
import Button from "../components/Button";



function Diary_writeAll() {

    const dispatch = useDispatch();
    const comments = useSelector((state)=> state.userReducer)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const [newText, setNewText] = useState("")
    const [isTitle, setIsTitle] = useState(false)

    const RandomNum = Math.floor(Math.random() * 100);

    const onChangeTitle = (e) =>{
        const useTitle = e.target.value
        setTitle(useTitle);
        if(useTitle.length > 5){
            alert("제목은 2글자 이상 5글자 이하로 입력해주세요!");
            setIsTitle(isTitle)
        }else{
            setIsTitle(true)
        }
        };


    
    
    // (e)=>{setTitle(e.target.value)}

    return (
        <div>
        <span>일기 댓글 페이지입니다.</span><br/>
        <br/>
        <input placeholder="이름(5자 이내)" maxLength={5} type="text"  onChange={onChangeTitle} /> 
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
};


export default  Diary_writeAll

