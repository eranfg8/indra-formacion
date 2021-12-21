import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter, fromEvent, Observable, Subscriber, take, map, from, of } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {

  mostrarHora: boolean = false
  @ViewChild('btnMostrar') boton !: ElementRef;


  constructor() { }

  ngOnInit(): void {
    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Mensaje 1')
      setTimeout(() => {
        subscriber.next('Mensaje 2')
      }, 3000)
      setTimeout(() => {
        subscriber.error('Un error')
        // subscriber.complete()
      }, 6000)
      setTimeout(() => {
        subscriber.next('Otro mensajes más')
      }, 7000)
    })

    miObservable.subscribe({
      next: (msg: string) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('Hay un error', err)
      },
      complete: () => {
        console.log('Ya no vamos a enviar más mensajes')
      }
    })
  }

  ngAfterViewInit() {

    /*  fromEvent(this.boton.nativeElement, 'click')
        .subscribe((event) => {
          alert('Has pulsado el botón')
        })
  */


    from([1, 2, 3])
      .pipe(
        map(n => n * 2)
      )
      .subscribe(n => console.log(n))

    of(1, 2, 3)
      .pipe(
        map(n => n * 2)
      )
      .subscribe(n => console.log(n))







    fromEvent(document, 'mouseover')
      .pipe(
        filter((event: any) => {
          const { clientX, clientY } = event
          return clientX > 400 && clientY < 300
        }),
        map((event: any) => {
          return { x: event.clientX, y: event.clientY }
        }),
        take(3)  //Entra el numero de veces que digamos
      )
      .subscribe((event) => {
        console.log('Estoy moviendo el ratón')
      })
  }

  toggleMostrarHora() {
    this.mostrarHora = !this.mostrarHora
  }

}