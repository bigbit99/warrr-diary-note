import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Diary_writeAll() {
    const dispatch = useDispatch();

    const userList = useSelector((state)=> state.userReducer); 
    console.log(userList)
    const [edited, setEdited] = useState(false);

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
                                                // name="body"
                                                // rows="10"
                                                // maxLength={200}
                                                // value={updatedTodo}
                                                // onChange={(event) => {
                                                // setUpdatedTodo(event.target.value);
                                                // }}
                                            />
                                        </>
                                    ) : (
                                        <p size="18">{user?.contents}</p>
                                    )
                                }

                                {edited ? (
                                    <button 
                                    type='button'
                                    onClick={onClickSubmitButton}
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