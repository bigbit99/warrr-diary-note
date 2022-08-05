import { Link } from "react-router-dom";


export default function Home() {
    return (
    <div>
        <div>  
            <Link to="/diarywrite">일기 쓰러 가기</Link>
            < br/>
            <Link to="/diarywriteAll">DiaryWriteAll</Link>
        </div>
        <hr/>
        <footer>
            2조 짱
        </footer>
    </div>)
}