import { useEffect } from 'react'

export function SocialPost() {

    // Fetch Api returns the Promise 
    // - what do you mean by promise ?
    // - what do you mean by Api ?

    const apiCall = () => fetch('https://jsonplaceholder.typicode.com/posts')
                        .then( res => console.log(res) )
                        .catch(err => console.log(err))

    useEffect(() => {
        apiCall()
    }, [])

    return (
        <>
        </>
    )
}