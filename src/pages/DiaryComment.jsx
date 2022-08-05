import React, { useState }  from "react";
import Button from "../components/Button";
import {useSelector} from "react-redux"


function Diary_writeAll() {

   let comments = useSelector((state)=>{ return state})
    console.log(comments)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
         
    const addComent =  () => {
        return(console.log(1));
    }

    return (
        <div>
            <span>일기 댓글 페이지입니다.</span><br/>
            <br/>
            <input placeholder="이름(5자 이내)" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
            <input placeholder="댓글을 추가하세요.(100자 이내)" type="text" value={content} onChange={(e)=> {setContent(e.target.value)}} />
            <Button onClick={addComent}>추가하기</Button>
            <br/>
            <br/>
            <div id="cards">                    
                {comments.map((comment) => (
                <div><span ket={comment.id}>{comment.title}</span><br/> <span>{comment.content}</span></div>    
                ))}
                <th>key: 1</th>
                <th>제목</th>
                <th>내용</th>                  
            </div>
        </div>
    );
};


export default  Diary_writeAll