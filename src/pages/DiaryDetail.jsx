import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getDiary } from "../redux/Users";
import {
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import styled from "styled-components";
import Button from '../components/Button';
import { patchfetchUser } from "../redux/modules/Diary_notes";

function Diary_writeAll() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.Diary_note.users); 
  let data = users.find(data => data.id.toString() === id);
  
  console.log(data.id);

  const [edited, setEdited] = useState(false);
  const [newDiary, setNewDiary] = useState("");

  useEffect(() => {
    setNewDiary(data.contents);
  }, []);

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onClickSubmitButton = () => {
    if (newDiary.trim() === "") {
      return alert(
        "입력된 내용이 없습니다."
      );
    }
    dispatch(
      patchfetchUser({
        ...data,
        contents: newDiary,
      })
    );
    setEdited(false);
    // navigate('/diarywriteall');
  };


  return (
    <DetailBox>
      <h2>다이어리 상세페이지</h2>
      <Detail 
       key={data.id}
      >
        <Link to="/diarywriteall">
          뒤로가기
        </Link>
        <p>{data?.name}</p>
        <p>{data?.title}</p>

        {edited ? (
          <input
            type="text"
            name="contents"
            value={newDiary}
            onChange={e => {
              setNewDiary(e.target.value);
            }}
          />
        ) : (
          <p>{data?.contents}</p>
        )}
        {edited ? (
          <Button
            label="저장"
            type="button"
            onClick={onClickSubmitButton}
          />
        ) : (
          <Button
            label="수정" 
            type="button"
            onClick={onClickEditButton}
          />
        )}

      <Button 
          label="삭제"
          type="button"
          onClick={() => {
            dispatch();
          }}
      />
      </Detail>
      
    </DetailBox>
  );
}

const DetailBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.div`
  width: 600px;
  height: 200px;
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px
    1px 4px;
`;

export default Diary_writeAll;
