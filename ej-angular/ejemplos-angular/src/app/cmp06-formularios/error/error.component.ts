import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() errores: ValidationErrors | null = {}

  mensajeErrores: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    console.log(this.errores)

    this.mensajeErrores = []
    for (let key in this.errores) {
      if (key == 'required') {
        this.mensajeErrores.push('el campo es obligatorio')
      } else if (key == 'minlength') {
        const error = this.errores[key]
        const msg = `Te faltan ${error.requiredLength - error.actualLength}/${error.requiredLength} caracteres`
        this.mensajeErrores.push(msg)
      } else if (key == 'pattern') {
        const error = this.errores[key]
        const msg = `El ${error.actualValue} no cumple con el siguiente patron: ${error.requiredPattern}`
        this.mensajeErrores.push(msg)
      } else if (key == 'esStarck') {
        const error = this.errores[key]
        const msg = `El ${error.nombreActual} no es un Stack: ${error.nombresValidos.join(', ')}`
        this.mensajeErrores.push(msg)
      }else if(key == 'esPwSegura'){
        const error = this.errores[key]
       
        if(!error.simbolos){
          this.mensajeErrores.push("La contraseña tiene que tener algún signo de puntuación")
        }

        if(!error.mayus){
          this.mensajeErrores.push("La contraseña tiene que tener alguna letra mayúscula")
        }
      }else if(key == 'confirmarPassword'){
        this.mensajeErrores.push('Las contraseñas tienen que ser iguales')
      }
    }
  }

}
