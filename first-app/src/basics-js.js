const a = 20 // scoping and constant - es6
let b = 30 // scoping available - es6
var c = 40 // no scoping available
d = 90 // bad practice

function toMagic() { // normal function
    return a + b + c
}

const onMagic = () => a + b + c // arrow -> lambda

class Car {

    constructor() {
        this.speed = 0
    }

    speedUp() {
        this.speed += 10
    }
}

const cr = new Car() // car object
console.log(cr.speed) // printing on browser console