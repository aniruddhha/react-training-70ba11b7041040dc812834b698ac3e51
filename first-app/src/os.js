import { useState } from 'react' // it is called as hook
// during the re-render it is necessary to remember values i.e called state
// and who does this thing ? useState
export function Os() {

    // short hand notation -> es6
    const [os, setOs] = useState('android') // sending request of re-rendering and remebering values during re-render
    // os is a value
    // setOs is a function that changes value of os

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