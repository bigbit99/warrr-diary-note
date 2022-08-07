import React, { useState }  from "react";
import {useSelector, useDispatch} from "react-redux";
import { addComment, delComment, changeComment } from "../redux/Users";
import styled from "styled-components";



function Diary_writeAll() {

    const comments = useSelector((state)=> state.userReducer)

    console.log(comments)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const dispatch = useDispatch();


    const StyledBox = styled.div`
    width: 600px;
    height: 200px;
    background-color: wheat;
    border: 1px solid black;
    text-align: center;
`;



    return (
        <div>
        <span>일기 댓글 페이지입니다.</span><br/>
        <br/>
        <input placeholder="이름(5자 이내)" type="text"  onChange={(e)=>{setTitle(e.target.value)}} /> 
        <input placeholder="댓글을 추가하세요.(100자 이내)" type="text"  onChange={(e)=> {setContent(e.target.value)}} />
        <button onClick={()=>{dispatch(addComment({id: 0, title, content}))}}>추가하기</button>
        <br/>
        <br/>
        <div id="cards">                    
            {comments.map((comment) => {return(
                <>
                    <div key={comment.id}>
                    <h2>{comment.title}</h2>
                    <span>{comment.content}</span>

                    <button onClick={() => dispatch(delComment(comment.id))}>삭제</button>
                    <button onClick>수정</button></div><br />
                    <StyledBox><input type='text'></input><button onClick={() => dispatch(changeComment({id : comment.id, content : comment.content}))}>완료</button></StyledBox>
                </>
            )})}
        </div>
    </div>
    );
}


export default  Diary_writeAll



// import React, { useState }  from "react";
// // import Button from "../components/Button";
// import {useSelector,useDispatch} from "react-redux"
// import { addComment, delComment, changeComment } from "../redux/Users";
// import styled from "styled-components";



// function Diary_writeAll() {
//     const userList = useSelector((state)=> state.userReducer); 

//     console.log(userList)
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState(""); 
//     const dispatch = useDispatch();

//     const StyledBox = styled.div`
//         width: 600px;
//         height: 200px;
//         background-color: wheat;
//         border: 1px solid black;
//         text-align: center;
//     `;
    

//     return (
//         <div>
//             <span>일기 댓글 페이지입니다.</span><br/>
//             <br/>
//             <input placeholder="이름(5자 이내)" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
//             <input placeholder="댓글을 추가하세요.(100자 이내)" type="text" value={content} onChange={(e)=> {setContent(e.target.value)}} />
//             <button onClick={()=>{dispatch(addComment({id: 0, title, content}))}}>추가하기</button>
//             <br/>
//             <br/>  
//                 <div id="cards">                    
//                 {userList.map((user) => {return(
//                     <>
//                     <div key={user.id}>
//                         <h2>
//                             {user.title}
//                         </h2>
//                         <span>
//                             {user.content}
//                         </span>

//                         <div>
//                             <h1>{user.name}</h1>
//                             <h1>{user.title}</h1>
//                             <h1>{user.contents}</h1>
//                         </div>
//                         <button onClick={() => dispatch(delComment(user.id))}>삭제</button>
//                         <button onClick>수정</button></div><br />
//                     <StyledBox><input type='text'></input><button onClick={() => dispatch(changeComment({id : user.id, content : user.content}))}>완료</button></StyledBox> </>
//                 )})}
//             </div>            
//         </div>
//     );
// };




// export default  Diary_writeAll
