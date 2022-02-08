import { useEffect, useState } from "react"

export function SpringRestComp() {

    const [st, setSt] = useState({ id: '', nm: '', isOkay: '', dt: '' })
    const getApiCall = () => fetch('http://localhost:8080/abc').then(rs => rs.json())

    const postApiCall = body => fetch(
        'http://localhost:8080/abc', 
        { 
            method: 'POST', 
            headers : { 'Content-Type' : 'application/json'}, 
            body
        }
    )

    const deleteApiCall = id => fetch(`http://localhost:8080/abc/${id}`, {
        method : 'DELETE',
        headers : { 'Content-Type' : 'application/json'}
    })

    useEffect(() => {
        getApiCall().then(json => setSt(json))
    }, [])

    const onClkOk = () => {
        const body = {
            id: 467,
            nm: 'pqr',
            isOkay: true,
            dt: '2021-01-01'
        }

        postApiCall(JSON.stringify(body))
            .then( res => res.json() )
            .then(json => console.log(json))
    }

    const onDelClk = () => {
        deleteApiCall(1233).then(res => res.json()).then( json => console.log(json) )
    }

    return (
        <>
            <h1> Name is {st.nm}</h1>
            <div>
                <input type='button' value='Okay' onClick={onClkOk} />
            </div>
            <div>
                <input type='button' value='Delete' onClick={onDelClk} />
            </div>
        </>
    )
}