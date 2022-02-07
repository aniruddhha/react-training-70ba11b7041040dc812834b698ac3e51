import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate()

    const onClk = () => navigate('post')

    return(
        <>
            <div>
                <input type='button' value='Okay' onClick={onClk}/>
            </div>
            <ul>
                <li>
                    <Link to="abc">Abc</Link>
                </li>
                <li>
                    <Link to="detailed">Detailed</Link>
                </li>
                <li>
                    <Link to="win">Window</Link>
                </li>
                <li>
                    <Link to="post">Posts</Link>
                </li>
            </ul>  
        </>
    )
}