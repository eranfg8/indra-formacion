let equipos = ['R. Madrid', 'Valencia', 'Betis', 'Villareal'];
/**
 * R. Madrid vs Betis
 * Villarreal vs Valencia
 */
let equipos2 = ['R. Madrid', 'Betis', 'Valencia', 'Villareal', 'Sevilla'];
/**
* R. Madrid vs Betis
* Villarreal vs Valencia
* Sevilla pasa directamente
*/
//Desustructuracion
//Rest Operator
//Recursion
function getEnfrentamientos(equipos) {
    equipos.sort(function () { return Math.random() - 0.5; });
    for (let i in equipos) {
        let index = +i;
        if (i != '0') {
            index++;
        }
        if (index <= equipos.length - 2 && equipos.length % 2 == 0) {
            console.log(equipos[index] + " vs " + equipos[index + 1]);
        }
        if (index <= equipos.length - 2 && equipos.length % 2 != 0) {
            if (index == equipos.length - 2 && equipos.length % 2 != 0) {
                console.log(equipos[index + 1] + " pasa directamente ");
            }
            else {
                console.log(equipos[index] + " vs " + equipos[index + 1]);
            }
        }
    }
}
getEnfrentamientos(equipos);
getEnfrentamientos(equipos2);
export {};
