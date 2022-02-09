import { useEffect, useState, useCallback, useMemo } from 'react'
import  React from 'react'

export function MemOptComp() {

    const [cnt, setCnt] = useState(0)
    const [posts, setPosts] = useState([])

    const apiCall = useCallback ( // it remembers the function
        () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    )

    const removeUnwnated = useMemo(() => posts.map( pst => ({ body : pst.body, title : pst.title } ))) // expensive work has to be done here

    useEffect( () => {
        apiCall().then( pst => setPosts(pst) )
    }, [])
    

    const onCnt = () => setCnt(cnt + 1)

    return (
        <>
            <div>
                <input type='button' value='Okay' onClick={onCnt}/>
            </div>
            <div>
                <MeomoLPosts posts={posts}/>
            </div>
        </>
    )
}

const MeomoLPosts = React.memo(function ListPosts({ posts }) { // memorizing the data 
    return posts.map( (pst, ind) => <Post key={ind} title={pst.title} body={pst.body}/> )
})

function Post({ title, body }) {
    return(
        <div>
            <p>{title}</p>
            <p>{body}</p>
            <hr/>
        </div>
    )
}