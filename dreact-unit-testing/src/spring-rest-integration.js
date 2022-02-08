import { useEffect } from "react"

export function SpringRestComp() {

    const getApiCall = () => fetch('http://localhost:8080/abc').then(rs => console.log(rs))

    useEffect(() =>{
        getApiCall()

    }, [])
    return (
        <>
        </>
    )
}