import { useState } from 'react'

export function InsuranceSwitch() {

    const [shCar, setShCar] = useState(false)
    const [shBike, setShBike] = useState(false)

    const showCar = (checked) => {
        setShCar(checked)
        setShBike(false)
    }

    const showBike = (checked) => {
        setShCar(false)
        setShBike(checked)
    }

    return (
        <>
            <div>
                <div>
                    <label> Car</label>
                    <input 
                        type='checkbox' 
                        onChange={(e) => showCar(e.target.checked)} 
                        checked={shCar}
                    />
                </div>
                <div>
                    <label> Bike </label>
                    <input 
                        type='checkbox' 
                        onChange={(e) => showBike(e.target.checked)} 
                        checked={shBike} 
                    />
                </div>
            </div>
            <div>
                {shCar && <Car />}
                {shBike && <Bike />}
            </div>
        </>
    )
}

function Car() {
    return (
        <form>
            <input type='text' placeholder='Roof Type' />
            <input type='button' value='Save' />
        </form>
    )
}

function Bike() {
    return (
        <form>
            <input type='text' placeholder='Tyres' />
            <input type='number' placeholder='Horn' />
            <input type='button' value='Save' />
        </form>
    )
}