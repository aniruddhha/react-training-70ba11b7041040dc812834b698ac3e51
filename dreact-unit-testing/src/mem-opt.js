import { useEffect, useState } from 'react'
export function MemOptComp() {

    const [cnt, setCnt] = useState(0)
    const [posts, setPosts] = useState([])

    const apiCall = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    useEffect(() => {
        apiCall().then( pst => setPosts(pst) )
    },[cnt])

    const onCnt = () => setCnt(cnt + 1)

    return (
        <>
            <div>
                <input type='button' value='Okay' onClick={onCnt}/>
            </div>
        </>
    )
}

function ListPosts() {
    
}

function Post() {

}