/*********************************  CALLBACKS  *********************************/
//const fs = require('fs')


/*
console.log('1')
setTimeout(() => {
    console.log('2')
}, 2000);
console.log('3')
*/


/*
console.log('Inicio')
fs.readFile('1.txt', (err, data) => {
    console.log("Datos: " + data.toString())
})

fs.readFile('2.txt', (err, data) => {
    console.log("Datos: " + data.toString())
})

fs.readFile('3.txt', (err, data) => {
    console.log("Datos: " + data.toString())
})
console.log('Fin')
*/


/** Para mostrarlos seimpre ordenados **/

/*
console.log('Inicio')
fs.readFile('1.txt', (err, data) => {
    console.log("Datos: " + data.toString())

    fs.readFile('2.txt', (err, data) => {
        console.log("Datos: " + data.toString())

        fs.readFile('3.txt', (err, data) => {
            console.log("Datos: " + data.toString())
        })
    })
})

console.log('Fin')
*/




/********************************* PROMESAS *********************************/

const fs = require('fs').promises
    /*
    const mensaje = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('El canario está en la jaula')
            reject('Ha salido un error')
        }, 2000);
    })

    console.log(mensaje)

    mensaje
        .then((msg) => {
            console.log(msg)
        })
        .catch(err => {
            console.log(err)
        })
    */




/********************************* Explicacion de funciones flecha *********************************/
//const fn1 = () => 3
//const fn2 = (a) => console.log(a)
//const fn3 = a => {
//    console.log(a)
//    return a
//}
//const fn4 = (a, b) => {}




/*
fs.readFile('1.txt')
    .then(data => {
        console.log(data.toString())
        return fs.readFile('2.txt')
    })

.then(data => {
    console.log(data.toString())
    return fs.readFile('3.txt')
})

.then(data => {
    console.log(data.toString())
})

.catch(err => {
    console.log(err)
    return new Error(err)
})
*/


/********************************* ASYNC / AWAIT *********************************/

async function fn() {

    let data;

    try {
        data = await fs.readFile('1.txt')
        console.log(data.toString())
    } catch (err) {
        console.log(err)
    }

    data = await fs.readFile('2.txt')
    console.log(data.toString())

    data = await fs.readFile('3.txt')
    console.log(data.toString())
}

fn()