import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  /*
  providers: [
    DatosService
  ]
  */
})
export class CmpBComponent implements OnInit {

  datos: Array<string> = []
  isLoggedIn: boolean = false

  constructor(
    private datosService: DatosService,
    private eventos: EventosService
  ) {
    this.eventos.authEvent$
      .subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn
      })
  }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()

  }

  guardar(texto: string): void {
    this.datosService.addDato(texto)
  }

}
