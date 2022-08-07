import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editDiary } from "../redux/Users";
import { Link } from 'react-router-dom';

function Diary_writeAll() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.userReducer); 
    console.log(userList)

    const [edited, setEdited] = useState(false);
    const [newDiary, setNewDiary] = useState("");
    //console.log(userList)

    useEffect(() => {
        setNewDiary(userList.contents);
    }, [userList]);

    const onClickEditButton = () => {
        setEdited(true);
      };

    const onClickSubmitButton = () => {
        setEdited(false);
    };

      
    return (
        <div>
            <div>
                {userList.map((user)=>{
                    return(
                        <>
                            <div key={user.id}>
                                <Link to="/diarywriteall">뒤로가기</Link>
                                <p>{user.id}</p>
                                <p>{user.title}</p>
                                {edited ? (
                                        <>
                                            <input
                                                name="contents"
                                                value={newDiary}
                                                onChange={(e)=>{setNewDiary(e.target.value)}}
                                            />
                                        </>
                                    ) : (
                                        <p>{user?.contents}</p>
                                    )
                                }

                                {edited ? (
                                    <button 
                                    type='button'
                                    onClick={() => onClickSubmitButton(dispatch(editDiary({new: newDiary, id: user.id, contents: user.contents})))}
                                    >저장</button>
                                ) : (
                                    <button 
                                    type='button'
                                    onClick={onClickEditButton}
                                    >수정</button>
                                )}
                                
                            </div>
                        </>
                    )
                })
                    
                }
            </div>
        </div>
    )
}



export default  Diary_writeAll