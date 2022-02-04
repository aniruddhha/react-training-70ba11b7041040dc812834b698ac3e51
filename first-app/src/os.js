export function Os() {

    let os = 'android'

    const btnClk = () => {
        os = 'ios'
        console.log(os)
    }

    return (
        <div>
            <h1>Your OS is : {os}</h1>
            <input type='button' value='Okay' onClick={btnClk}/>
        </div>
    )
}