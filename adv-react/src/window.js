import { useState, useEffect } from "react"
import { SpringRestTest } from './spring-rest-demo'

export const WindowComp = () => {

    const [wd, setWd] = useState(window.innerWidth)

    useEffect(() => {

        const onWd = () => setWd(window.innerWidth)

        window.addEventListener('resize', onWd ) // side effect

        return () => window.removeEventListener('resize',onWd) // handling side effect
    })

    return (
        <>
            <h1> Current Width is {wd} </h1>

            <SpringRestTest/>
            
        </>
    )
}