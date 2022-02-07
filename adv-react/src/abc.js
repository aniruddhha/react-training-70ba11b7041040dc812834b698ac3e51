
import { useState } from "react"

export function Abc() {
    // useEffect
    // handling side effects
    // what do you mean by side effect ?

    // you to write a code for addition of two numbers

    const [num1, setNum1] = useState(10)
    const [num2, setNum2] = useState(10)
    const [res, setRes] = useState(0)

    const onClk = () => setRes(num1 + num2)
    const onNum1Change = (e) => setNum1(Number.parseInt(e.target.value)) 
    const onNum2Change = (e) => setNum2(Number.parseInt(e.target.value)) 
    // managing state of input boxes in a controlled way

    return (
        <>
            <div>
                <input 
                    type='text' 
                    placeholder="Num1" 
                    value={num1}
                    onChange={onNum1Change}
                    />

                <input 
                    type='text' 
                    placeholder="Num2" 
                    value={num2}
                    onChange={onNum2Change}
                    />
                <h5>Addition is {res}</h5>  
            </div>
            <div>
                <input type='button' value='Add' onClick={onClk} />
            </div>
        </>
    )
}