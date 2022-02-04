import { useState } from 'react'

export function Os() {

    const [os, setOs] = useState('android') // sending request of re-rendering and remebering values during re-render

    const onClk = () => setOs('ios')

    const onReset = () => setOs('android')

    return (
        <div>
            <h1>Your OS is : {os}</h1>
            <input type='button' value='Okay' onClick={onClk}/>
            <input type='button' value='Reset' onClick={onReset}/>
        </div>
    )
}