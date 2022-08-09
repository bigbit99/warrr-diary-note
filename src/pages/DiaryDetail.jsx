import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editDiary, getDiary } from "../redux/Users";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../components/Button.styled';

function Diary_writeAll() {
    let {id} = useParams();
    const dispatch = useDispatch();
    
    const userList = useSelector((state)=> state.userReducer); 
    let data = userList.find((user) => user.id.toString() === id);
    // let data = userList.find((user) => {console.log(user.id === id)
    //     console.log(typeof id) string
    //     console.log(typeof user.id) 
    // });
    // console.log(user)
    console.log(id)
    //console.log(userList)

    const [edited, setEdited] = useState(false);
    const [newDiary, setNewDiary] = useState("");
    //console.log(userList)

    useEffect(() => {
        dispatch(getDiary(id));
    }, [dispatch, id]);

    useEffect(() => {
        setNewDiary(data.contents);
    }, [data]);

    const onClickEditButton = () => {
        setEdited(true);
      };

    const onClickSubmitButton = () => {
        if(newDiary.trim() === '') {
            alert("내용을 입력해주세요!");
        }
        setEdited(false);
    };

    console.log(data);
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
                        onClick={() => onClickSubmitButton(dispatch(editDiary({new: newDiary, id: data.id, contents: data.contents})))}
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