
import { useEffect, useRef } from "react"

export function Detailed() {

    // if you need to use native dom elemnent, use this useRef
    // stricly avoid over use of this hook, insted use props

    // whenever it is not possible to work with the props, then and only then use refs
    const ip = useRef(null)

    useEffect(()=>{
        ip.current.style.border = '1px solid red'
    }, [])

    return(
        <>
            <div>
                <input type='text' ref={ip} placeholder='Ref'/>
            </div>
            <div>
                <input type='text' style={{ border : '1px solid red' }} placeholder='Prop'/>
            </div>
        </>
    )
}