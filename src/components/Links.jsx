import { Link } from "react-router-dom";

function Links(){
    return(
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/diarywrite">DiaryWrite</Link>
        </li>
        <li>
            <Link to="/diarydetail">Profile/1</Link>
        </li> 
        <li>
            <Link to="/diarycomment">About</Link>
        </li>
       
    </ul>

    )
}

export default Links