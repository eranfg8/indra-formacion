import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import customValidators, { esUnStark } from '../custom-validators';
//import customValidators from '../custom-validators';   Para importar varias cosas
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  formulario: FormGroup

  get erroresUsername(): ValidationErrors | null {
    return this.formulario.controls['username'].errors
  }

  get erroresEmail(): ValidationErrors | null {
    return this.formulario.controls['email'].errors
  }

  get erroresPassword(): ValidationErrors | null {
    return this.formulario.controls['password'].errors
  }

  get erroresConfirmarPassword(): ValidationErrors | null {
    return this.formulario.controls['confirmarPassword'].errors
  }

  get inputConfirmarPasswordProps(): boolean {
    return this.formulario.controls['confirmarPassword'].dirty && this.formulario.errors && this.formulario.errors['confirmarPassword']
  }





  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      username: formBuilder.control('', [Validators.required, CustomValidators.esUnStark]),
      email: formBuilder.control('admin@admin.com', [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.(com|es|net)/)]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(8), CustomValidators.esPasswordSegura({ mayus: true, simbolos: true })]),
      confirmarPassword: formBuilder.control('', [CustomValidators.passwordRepetidaValida])
    }, {
      // updateOn: 'blur' si queremos que la validacion se muestre cuando el input pierde el foco
    //  validators: [CustomValidators.passwordRepetidaValida]
    })
  }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.formulario.value)
  }

  getPintaErrores(campo: string) {
    return this.formulario.controls[campo].invalid && this.formulario.controls[campo].dirty
  }

}
