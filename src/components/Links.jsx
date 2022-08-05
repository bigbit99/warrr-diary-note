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
            <Link to="/diarywriteAll">DiaryWriteAll</Link>
        </li>
        <li>
            <Link to="/diarydetail">DiaryDetail</Link>
        </li> 
        <li>
            <Link to="/diarycomment">DiaryComment</Link>
        </li>
       
    </ul>

    )
}

export default Links