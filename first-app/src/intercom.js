import { useState } from "react"

// this inter component communication comes with
// lot of memory related issues, that has to be addressed properly.
export function Abc() {

    const [fnt, setFnt] = useState(10)
    const style = { fontSize : `${fnt}px` }

    const callFromPqr = () => setFnt( fnt + 3 )

    return(
        <>
            <p style={style}>Abc Component</p>  
            <hr/>

            <Pqr fn={callFromPqr}/>
        </>
    )
}

export function Pqr({ fn }) {
    return (
        <>
            <h5>Pqr Component</h5>  
            <input type ='button' value='Okay' onClick={fn} />
            <hr/>
        </>
    )
}

