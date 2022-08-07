//develop
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
    return (
    <div className="home">
        <div className="homebox">
            <hr/>
            <div>  
                <Link to="/diarywrite" className="link">일기 쓰러 가기</Link>
                < br/>
                <Link to="/diarywriteAll" className="link">DiaryWriteAll</Link>
            </div>
            <hr/>
            
        </div>
            <footer></footer>
    </div>
    )
}