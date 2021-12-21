import { FormControl, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";

interface IOpcionesPassword {
    mayus?: boolean,
    simbolos?: boolean
}

function esPasswordSegura(opciones: IOpcionesPassword): ValidatorFn {
    let hayMayusculas: boolean = false
    let haySimbolos: boolean = false
    return (control) => {

        if (opciones.mayus) {
            hayMayusculas = control.value.toLowerCase() !== control.value
        }
        if (opciones.simbolos) {
            haySimbolos = new RegExp('\\W+').test(control.value)
        }

        const objError = {
            esPwSegura: {
                simbolos: haySimbolos,
                mayus: hayMayusculas
            }
        }

        return hayMayusculas && haySimbolos ? null : objError
    }
}

function passwordRepetidaValida(control: AbstractControl): ValidationErrors | null {

    const formulairo = control.parent
    const password = formulairo?.value.password

    const confirmarPassword = control.value


    console.log(password + " --- " + confirmarPassword)

    if (password == confirmarPassword) {
        return null
    }
    return {
        confirmarPassword: true
    }
}

/*
function passwordRepetidaValida(formGroup: AbstractControl): ValidationErrors | null {
    const { password, confirmarPassword } = formGroup.value

console.log(password + " --- " + confirmarPassword)

    if (password == confirmarPassword) {
        return null
    }
    return {
        confirmarPassword: true
    }
}
*/



export function esUnStark(control: AbstractControl): ValidationErrors | null {
    const nombresStack = ['robb', 'arya', 'toby', 'sansa', 'rickon', 'bran', 'nedd']
    if (nombresStack.includes(control.value.toLowerCase())) {
        return null
    }
    return {
        esStarck: {
            nombresValidos: nombresStack,
            nombreActual: control.value
        }
    }
}

export default { esUnStark }  /** Para poder exportar lo que hay en el default */

export const CustomValidators = {
    esUnStark,
    esPasswordSegura,
    passwordRepetidaValida
}