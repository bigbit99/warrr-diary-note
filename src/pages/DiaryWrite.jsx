import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addUser } from '../redux/modules/Users';
import { useNavigate } from 'react-router-dom';
import {addfetchUser} from '../redux/modules/Diary_notes'
import {v4 as uuidv4} from "uuid";
import Button from '../components/Button';
import styled from 'styled-components';



function Diary_write() {
  const [name, setName] = useState({
    userName : ''
  });
  const [title, setTitle] = useState({
    userTitle : ''
  });
  const [contents, setContents] = useState({
    userContents : ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userReducer);
  
  return (
    <FormBox
      onSubmit={(event) => {
        // event.preventDefault();
        dispatch(addfetchUser({id: uuidv4(), name,title,contents}));
        navigate("/diarywriteAll");
        console.log("버튼?????");
      }} 
    >
      <FormCont>
        <div className="boxname">
            <p>이름</p>
            <input
              placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
              required
              onChange={(event) => {
                const { value } = event.target;
                setName({ ...name, userName:value });
                
              }}
              />
        </div>
        <div className="boxtitle">
          <p>제목</p>
          <input
            placeholder="제목을 입력해주세요.(10자 이상)"
            required
            value={title.userTitle}
            onChange={(event) => {
              const { value } = event.target;
              setTitle({ ...title, userTitle:value });
            }}      
          />
        </div>
        <div className="boxcomment">
          <p>내용</p>
          <textarea
            placeholder="내용을 입력해주세요.(10자 이상)"
            required
            onChange={(event) => {
              const { value } = event.target;
              setContents({ ...contents, userContents:value });
            }}
          />
        </div>
      </FormCont>
      <Button label="일기 쓰기" type="submit" />
      <Button 
        label="일기보러가기" 
        type="button" 
        onClick={() => {
          navigate('../diarywriteAll')
          console.log("일기버튼");  
        }}/>
        
    </FormBox>
  );
}

export default Diary_write;

const FormBox = styled.form`
  width: 100%;
  max-width: 500px;
  position: absolute;
  top:50%; left: 50%;
  transform: translate(-50%, -50%);
`

const FormCont = styled.div `
  width:100%;
  background-color:rgba(255,255,255,0.2);
  padding: 20px;
  margin-bottom: 15px;
  div.boxname{
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    p{
      width: 10%;
    }
    input {
      display: block;
      width: 100%;
      padding:15px;
      box-sizing: border-box;
      border-radius: 30px;
      border: 0; outline: 0;
    }
  }

  div.boxtitle{
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    p{
      width: 10%;
    }
    input {
      display: block;
      width: 100%;
      padding:15px;
      box-sizing: border-box;
      border-radius: 30px;
      border: 0; outline: 0;
    }
  }

  div.boxcomment{ 
    width: 100%;
    textarea {
      width: 100%;
      padding:15px;
      box-sizing: border-box;
      border-radius: 30px;
      border: 0; outline: 0;
    }
  }
`
