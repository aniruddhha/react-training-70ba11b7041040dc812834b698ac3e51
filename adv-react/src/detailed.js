
import { useEffect, useRef } from "react"

export function Detailed() {

    // if you need to use native dom elemnent, use this useRef
    // stricly avoid over use of this hook, insted use props
    const ip = useRef(null)

    useEffect(()=>{
        ip.current.style.border = '1px solid red'
    }, [])

    return(
        <>
            <div>
                <input type='text' ref={ip}/>
            </div>
        </>
    )
}