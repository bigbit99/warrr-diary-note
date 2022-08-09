import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiary } from "../redux/Users";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../components/Button.styled';
import { patchfetchUser } from "../redux/modules/Diary_notes";

function Diary_writeAll() {
    let {id} = useParams();
    const dispatch = useDispatch();
    //console.log(id)
    
    // const userList = useSelector((state) => state.userReducer);
    const users = useSelector((state)=>state.Diary_note.users) //수정할 곳
    let data = users.find((users) => users.id.toString() === id);  
    // console.log(data);
    // console.log(users);
    //console.log(data);
    //console.log(data.contents)

    const [edited, setEdited] = useState(false);
    const [newDiary, setNewDiary] = useState("");

    // useEffect(() => {
    //     patchfetchUser();
    //   }, []);

    // useEffect(() => {
    //     dispatch(getDiary(id));
    // }, [dispatch, id]);

    useEffect(() => {
        setNewDiary(data.contents);
    }, [data]);

    const onClickEditButton = () => {
        setEdited(true);
      };

    const onClickSubmitButton = () => {
        console.log("submit");
        if (newDiary.trim() === "") {
          return alert("입력된 내용이 없습니다.");
        }
        dispatch(
            patchfetchUser({
                ...users,
                id: id,
                contents: newDiary,
            })
        )
        setEdited(false);
      };

    return (
        <DetailBox>
            <h2>다이어리 상세페이지</h2>
            <Detail>
            <Link to="/diarywriteall">뒤로가기</Link>
            <p>{id}</p>
            <p>{data.title}</p>
            {edited ? (
                    <input
                    type="text"
                    name="contents"
                    value={newDiary}
                    onChange={(e)=>{setNewDiary(e.target.value)}}
                    />   
                    ) : (
                    <p>{data.contents}</p>
                    )
            }
            {edited ? (
                        <Button 
                        type='button'
                        onClick={() => onClickSubmitButton()}
                        
                        >저장</Button>
                    ) : (
                        <Button 
                        type='button'
                        onClick={onClickEditButton}
                        >수정</Button>
                    )
            }
            </Detail>
        </DetailBox>
    );
}

const DetailBox = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

const Detail = styled.div`
    width: 600px;
    height: 200px;
    background-color: wheat;
    border: 1px solid #eee;
    border-radius:10px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;


export default  Diary_writeAll