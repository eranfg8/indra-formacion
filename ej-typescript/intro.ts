//Transpilar 
//tsc nombre-archivo --target es6
//tsc nombre-archivo --target es6 -w

let a: number = 1
//console.log(a)


function fn() {
    let b = 1; // Variable de bloque
    var c = 1; // Variable global

    if (true) {
        let b = 2;
        var c = 3;
    }
    console.log(b);
    console.log(c);
}

fn();

a = 9;



//Tipos de datos
const unNumero: number = 3;
const unTexto: string = "un texto";
const esVerdad: boolean = true;

const esNull: string | null | number = 0;

//Nuestro propio tipo de dato
type strONullONum = string | null | number;
const texto1: strONullONum = null;


const arrNumeros1: Array<number> = [1,2,3,4];
const arrNumeros2: number[] = [1,2,3,4];


let cualquierTipo: any = 4;
cualquierTipo = "Cualquier tipo";
cualquierTipo = false;
cualquierTipo = [1, "", false];


interface Persona{
    nombre: string,
    apellidos: string,
    email: string,
    fechaNacimiento: Date
}

const falco: Persona = {
    nombre: "Charles",
    apellidos: "Falco",
    email: "c.falco@mail.com",
    fechaNacimiento: new Date(1996, 1, 0)
}

const mesesES = ['Enero', 'Febrero'];

console.log(mesesES[falco.fechaNacimiento.getMonth()]);


