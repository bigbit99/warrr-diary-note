import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addUser } from '../redux/modules/Users';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button.styled';
import {addfetchUser} from '../redux/modules/Diary_notes'


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
  const userList = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  // const addData = (event) => {
  //   event.preventDefault();
  //   const newUser = {
  //     id: userList[userList.length - 1].id + 1,
  //     name: name,
  //     title: title,
  //     contents: contents,
  //   };
  //   console.log(newUser);
  //   dispatch(addUser(newUser));
  // };
 


  return (
    <form onSubmit={(event) => {event.preventDefault();
      dispatch(addfetchUser({id: userList[userList.length - 1].id + 1, name,title,contents}));
      }}className="box">
      <div className="boxname">
        작성자
        
          <input
            type={"text"}
            placeholder="name"
            onChange={(event) => {
            const { value } = event.target;
            setName({ ...name, userName:value });
            }}
            />
           

      </div>
      <div className="boxtitle">
        제목
        <input
          type="text"
          minlength='10' 
          placeholder="제목을 입력해주세요.(10자 이상)"
          onChange={(event) => {
            const { value } = event.target;
            setTitle({ ...title, userTitle:value });
          }}

        />
   
        
      </div>
      <div className="boxcomment">
        내용
        <input
          type="text"
          placeholder="내용을 입력해주세요.(10자 이상)"
          onChange={(event) => {
            const { value } = event.target;
            setContents({ ...contents, userContents:value });
          }}
          
        />
  
      </div>
      <button type="submit" onClick={(num) => this.doAction("run") }>Add</button>

      <Button type="button" onClick={() => navigate('../diarywriteAll')}>
        일기 보러가기  
      </Button>
    </form>
  );
}

export default Diary_write;
