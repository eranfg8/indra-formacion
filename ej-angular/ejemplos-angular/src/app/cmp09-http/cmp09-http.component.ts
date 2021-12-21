import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIdNuevaTarea } from './interfaces';
import { Tarea } from './models/tarea';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {

  listaTareas: Array<Tarea> = []
  formEditar: FormGroup

  constructor(private tareasServ: TareasService) {
    this.formEditar = new FormGroup({
      id: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false)
    })
  }

  ngOnInit(): void {
    this.tareasServ.getTareas()
      .subscribe((tareas: Array<Tarea>) => {
        console.log(tareas)
        this.listaTareas = tareas
      })
  }


  actualizar() {
    console.log(this.formEditar)
    const idTareaEditada = this.formEditar.value.id

    this.tareasServ.updateTarea(this.formEditar.value)
      .subscribe((datosActualizados: Tarea) => {

        // SOLUCION 1
        //  let tarea = this.listaTareas.find(t => t.id === idTareaEditada)
        //  Object.assign(tarea, datosActualizados)

        //SOLUCION 2
        const pos = this.listaTareas.findIndex((t: Tarea) => t.id === idTareaEditada)
        const tareaActualizada = new Tarea(datosActualizados.titulo, datosActualizados.completada, idTareaEditada)
        this.listaTareas.splice(pos, 1, tareaActualizada)

        // MI SOLUCION  
        /*  
        this.tareasServ.getTareas()
            .subscribe((tareas: Array<Tarea>) => {
              console.log(tareas)
              this.listaTareas = tareas
            })
            */
      })
  }


  rellenarFormulario(t: Tarea) {
    // Si queremos cambiar algun campo, podemos usar el metodo de aplciarlo sobre el campo
    //  this.formEditar.controls['id'].setValue(t.id)
    //  this.formEditar.controls['titulo'].setValue(t.titulo)
    //  this.formEditar.controls['completada'].setValue(t.completada)

    // Si queremos cambiar todos los campos, podemos usar el metodo de cambiar el formulario 
    /*  this.formEditar.setValue({
        id: t.id,
        titulo: t.titulo,
        completada: t.completada
      })*/


    //Usar desustructuracion
    this.formEditar.setValue({ ...t })
  }


  guardar() {
    /*
        const tarea = {
          titulo: "Ver One Piece otro finde",
          completada: false
        }
    */
    /*** tarea pertecnece al modelo Tarea ***/
    const tarea = new Tarea('Ver One Piece este finde', false)

    this.tareasServ.createTareas(tarea)
      .subscribe((datos: IIdNuevaTarea) => {
        console.log(datos)
        tarea.id = datos.name
        this.listaTareas.push(tarea)

      })
  }


  completar(tarea: Tarea) {
    this.tareasServ.completeTarea(tarea)
      .subscribe((datos: any) => {
        console.log(datos)
        tarea.completada = datos.completada
      })
  }


  eliminar(id: string): void {
    this.tareasServ.deleteTarea(id)
      .subscribe(() => {
        //Solucion 1
        this.listaTareas = this.listaTareas.filter((t: Tarea) => {
          return t.id !== id
        })

        // Solucion 2
        //  const pos = this.listaTareas.findIndex((t: Tarea) => { t.id === id })
        //  this.listaTareas.splice(pos, 1)
      })

  }

}
