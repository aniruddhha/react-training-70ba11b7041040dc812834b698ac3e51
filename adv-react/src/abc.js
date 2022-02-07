
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export function Abc() {
    // useEffect
    // handling side effects
    // what do you mean by side effect ? Anything which react says, that is not my resposibility but I can provide a way to handle it is called side effect
    // The result from non react world  can impact on react parts all such situation are called side effects. To handle side effects, react says that I am giving you
    // speacial hook called useEffect

    // you to write a code for addition of two numbers

    const prms = useParams()

    const [num1, setNum1] = useState(10)
    const [num2, setNum2] = useState(10)
    const [res, setRes] = useState(0)

    const onClk = () => setRes(num1 + num2)
    const onNum1Change = (e) => setNum1(Number.parseInt(e.target.value))
    const onNum2Change = (e) => setNum2(Number.parseInt(e.target.value))
    // managing state of input boxes in a controlled way

    useEffect(() => {
        console.log(prms)
        // handle the side effect
        // useEffect hook gets invoked on each rerender, provided it depends on second parameter

        setNum1(Number.parseInt(prms['num1']))
        setNum2(Number.parseInt(prms['num2']))

        setRes(num1 + num2)
       
        console.log(`Value of res is ${res}`)

        return () => { /* side effects are nullified */ }
    },[res])


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