// THIS


function a() {
    console.log(this)
}

const persona = {
    nombre: "Erán",
    apellidos: "Guedes",
    getNombreCompleto: function() {
        console.log(this)

        const b = function() {
            console.log('Dentro de b ', this)
        }

        b()
    }
}

a()

persona.getNombreCompleto()

console.log('************************************************************************************')


// Solucion 1 - Patron self/that
const persona1 = {
    nombre: "Erán",
    apellidos: "Guedes",
    getNombreCompleto: function() {
        console.log(this)

        let that = this

        const b = function() {
            console.log('Dentro de b ', that)
        }
        b()
    }
}
persona1.getNombreCompleto()


console.log('************************************************************************************')


// Solucion 2 - bind
const persona2 = {
    nombre: "Erán",
    apellidos: "Guedes",
    getNombreCompleto: function() {
        console.log(this)

        let b = function() {
            console.log('Dentro de b ', this)
        }

        b = b.bind(this)

        b()
    }
}
persona2.getNombreCompleto()


console.log('************************************************************************************')

// Solucion 3 - apply / call
const persona3 = {
    nombre: "Erán",
    apellidos: "Guedes",
    getNombreCompleto: function() {
        console.log(this)

        let b = function() {
            console.log('Dentro de b ', this)
        }

        b.apply(this)
        b.call(this)
    }
}
persona3.getNombreCompleto()


console.log('************************************************************************************')


// Solucion 4 - arrows function
const persona4 = {
    nombre: "Erán",
    apellidos: "Guedes",
    getNombreCompleto: function() {
        console.log(this)

        let b = () => {
            console.log('Dentro de b ', this)
        }
        b()
    }
}
persona4.getNombreCompleto()