import React from "react";

function Diary_writeAll() {

    const addComent = (e)=>{
        
    }

    return (
        <div>
            <span>일기 댓글 페이지입니다.</span><br/>
            <br/>
            <input placeholder="이름(5자 이내)" /> 
            <input placeholder="댓글을 추가하세요.(100자 이내)" />
            <button onClick={addComent}>추가하기</button>
            <br/>
            <br/>
            <div>
                <span>제목</span><br/>
                <span>내용을 넣어주세요</span>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    );
};


export default  Diary_writeAll