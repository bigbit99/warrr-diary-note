import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/modules/Diary_notes";

function Diary_writeAll() {
    const dispacth = useDispatch();
    const users = useSelector((state)=>state.Diary_note.users) 
    console.log(users)
    const navigate = useNavigate();
    useEffect(()=>{
        dispacth(fetchUser());
    },[])

    // if(error){
    //     return <p>에러입니다</p>
    // }        
    // if(loading){
    //     return <p>로딩중...</p>
    // } 
    
    return (
        <div >
            {users?.length > 0 && 
                users.map((users) => (
                    <div key={users.id}>
                        <p>{users.name}</p>
                        <p>{users.title}</p>
                        <p>{users.contents}</p>
                    </div>
                ))
            }
              <button onClick={()=>navigate('../diarydetail')}>자세히보기</button>
        </div>
    )
}


export default  Diary_writeAll