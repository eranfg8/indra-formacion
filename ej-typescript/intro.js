//Transpilar 
//tsc nombre-archivo --target es6
//tsc nombre-archivo --target es6 -w
var a = 1;
//console.log(a)
function fn() {
    var b = 1; // Variable de bloque
    var c = 1; // Variable global
    if (true) {
        var b_1 = 2;
        var c = 3;
    }
    console.log(b);
    console.log(c);
}
fn();
a = 9;
//Tipos de datos
var unNumero = 3;
var unTexto = "un texto";
var esVerdad = true;
var esNull = 0;
var texto1 = null;
var arrNumeros1 = [1, 2, 3, 4];
var arrNumeros2 = [1, 2, 3, 4];
var cualquierTipo = 4;
cualquierTipo = "Cualquier tipo";
cualquierTipo = false;
cualquierTipo = [1, "", false];
var falco = {
    nombre: "Charles",
    apellidos: "Falco",
    email: "c.falco@mail.com",
    fechaNacimiento: new Date(1996, 1, 0)
};
var mesesES = ['Enero', 'Febrero'];
console.log(mesesES[falco.fechaNacimiento.getMonth()]);
