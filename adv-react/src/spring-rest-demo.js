
import { useEffect } from 'react'

export function SpringRestTest() {

    const apiCall = (url, body) => fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    } )

    useEffect( () => {

        const url = 'http://localhost:8080/customer'
        const body = {
            user : {
                firstName : 'abc',
                lastName :'pqr',
                mobile :'63426462',
                address : 'abc road',
                password : '1234'
             },
            gender : 1
        }

        apiCall(url, body)
            .then(res => res.json())
            .then(console.log)
    }, [])


    return(
        <>
        </>
    )
}