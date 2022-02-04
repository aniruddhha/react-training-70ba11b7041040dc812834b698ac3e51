export function JsDemo() {

    const onMagic = dt => console.log(dt)
    const onDoubleMagic = (a, b) => console.log(` A ${a} B ${b}`)
    const onTripleMagic = (...dt /* rest operator */ ) => console.log(dt) //

    const onBtn = () =>  {
        const obj = { a : '1', b :'2' }
        const a = '1'
        const b = '2'
        onMagic({ a : a, b : b }) //normal
        onMagic({ a, b }) // es6

        const arr = [1, 2]
        onDoubleMagic(a, b) //normal
        onDoubleMagic(obj.a, obj.b) // normal
        onDoubleMagic(arr[0], arr[1]) // normal
        onDoubleMagic(arr) // weired output
        onDoubleMagic(...arr) //es6 --> spread operator
        console.log(...arr)

        // you are passing seperate values, 
        // which is getting combined to one variable
        onTripleMagic(1, 2, 3, 5 ,7) // rest -> operator
    }

    return (
        <>
            <input type='button' value='Okay' onClick={onBtn} />
        </>
    )
}