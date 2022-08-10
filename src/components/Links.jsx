import { Link } from "react-router-dom";

function Links(){
    return(
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/diarycomment">DiaryComment</Link>
        </li>
       
    </ul>

    )
}

export default Links