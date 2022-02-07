import { useEffect, useState } from 'react'

export function SocialPost() {

    // Fetch Api returns the Promise 
    // - what do you mean by promise ?
    // - what do you mean by Api ?

    const [posts, setPosts] = useState([])

    const apiCallGet = () => fetch('https://jsonplaceholder.typicode.com/posts') // get call 
        .then(res => res.json()) //  extracting json body from complete respone object
        .catch(err => console.log(err)) // handling error if any

    useEffect(() => {
        apiCallGet().then(json => setPosts(json))
    }, []) // making api call on initial render only

    const uiPosts = posts.map(post => (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
        </div>
    ))

    return (
        <>
            {uiPosts}
        </>
    )
}