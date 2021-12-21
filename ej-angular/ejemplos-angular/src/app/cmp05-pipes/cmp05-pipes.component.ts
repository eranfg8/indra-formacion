import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {

  producto: any = {
    titulo: 'one plus 9',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim nisi excepturi sed. Blanditiisassumenda vitae ipsa nobis delectus beatae consequatur. Cum veniam sapiente sit aliquid quaerat velit nobis non.',
    precio: 800,
    fechaLanzamiento: new Date(2021, 2, 13)
  }

  tareas: Array<string> = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ]

  palabras: Array<string> = [
    'no', 
    'si',
    'hola'
  ]

  filtroTxt = ""
  fraseOcultar = ""
  fraseRevertida: string = ''

  datosPost1 = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(resp => { 
    console.log(resp)
    return resp.json() 
  })

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(event: any): void {
    this.tareas = [...this.tareas, event.target.value]
    //this.tareas.push(event.target.value) --- No es eficiente, ya que sigue apuntando a la misma referencia
  }

}
