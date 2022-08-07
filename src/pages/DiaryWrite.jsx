import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/Users';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button.styled';
// import { useForm } from 'react-hook-form';

function Diary_write() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  //form 유효성
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

  // console.log(errors);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const addData = (event) => {
    event.preventDefault();
    const newUser = {
      id: userList[userList.length - 1].id + 1,
      name: name,
      title: title,
      contents: contents,
    };
    console.log(newUser);
    dispatch(addUser(newUser));
  };
  console.log(userList);

  return (
    <form onSubmit={(event) => addData(event)} className="box">
      <div className="boxname">
        작성자
        <input
          type="text"
          placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        //   {...register('name', {
        //     required: '필수 항목입니다.',
        //     minLength: {
        //       value: {name},
        //       message: '10자 이상 입력해주세요.',
        //     },
        //   })}
        />
        {/* <p>{errors.name?.message}</p> */}
      </div>
      <div className="boxtitle">
        제목
        <input
          type="text"
          placeholder="제목을 입력해주세요.(10자 이상)"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        //   {...register('title', {
        //     required: '필수 항목입니다.',
        //     minLength: {
        //       value: {username},
        //       message: '10자 이상 입력해주세요.',
        //     },
        //   })}
        />
        {/* <p>{errors.title?.message}</p> */}
      </div>
      <div className="boxcomment">
        내용
        <input
          type="text"
          placeholder="내용을 입력해주세요.(10자 이상)"
          onChange={(event) => {
            setContents(event.target.value);
          }}
          value={contents}
        //   {...register('comment', {
        //     required: '필수 항목입니다.',
        //     minLength: {
        //       value: {com},
        //       message: '10자 이상 입력해주세요.',
        //     },
        //   })}
        />
        {/* <p>{errors.comment?.message}</p> */}
      </div>
      <button type="submit">Add</button>

      <Button type="button" onClick={() => navigate('../diarywriteAll')}>
        일기 보러가기
      </Button>
    </form>
  );
}

export default Diary_write;
