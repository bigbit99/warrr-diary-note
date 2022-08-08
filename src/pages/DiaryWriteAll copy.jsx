import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

function Diary_writeAll() {
    
    const userList = useSelector((state)=> state.userReducer); 
    console.log(userList)
    const navigate = useNavigate();
    
    return (
        <div >
            
            {userList.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.title}</h1>
                        <h1>{user.contents}</h1>
                    </div>
                );
            })}
              <button onClick={()=>navigate('../diarydetail')}>자세히보기</button>
        </div>
    )
}


export default  Diary_writeAll