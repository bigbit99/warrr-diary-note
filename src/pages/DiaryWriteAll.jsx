import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delComment } from "../redux/Users";
// import Button from "../components/Button";

function Diary_writeAll() {
    const userList = useSelector((state)=> state.userReducer); 
    console.log(userList)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div >
            {userList.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.title}</h1>
                        <h1>{user.contents}</h1>
                        <button onClick={()=>navigate(`/diarydetail/${user.id}`)}>자세히보기</button>
                        <button onClick={() => dispatch(delComment(user.id))}>삭제</button>
                    </div>
                );
            })}
              
        </div>
    )
}


export default  Diary_writeAll