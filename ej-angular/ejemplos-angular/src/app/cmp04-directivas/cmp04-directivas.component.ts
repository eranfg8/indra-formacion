import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent implements OnInit {

  colorLetra: string = '#FFFFFF'
  colorFondo: string = '#000000'
  tachada: boolean = true
  logueado: boolean = false
  mascotas: Array<string> = [
    'Perro',
    'Gato',
    'Canario'
  ]
  mascotaSeleccionada: string = 'Gato'

  constructor() { }

  ngOnInit(): void {
  }

  toggleTachada() {
    this.tachada = !this.tachada
  }

  alternarLogin() {
    this.logueado = !this.logueado
  }

  cambiarLogueado(login: boolean) {
    this.logueado = login
  }

}
