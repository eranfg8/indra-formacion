import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-vendehumos';

  listaVendehumos: any = [
    {
      nombre: 'Josef Ajram',
      descripcion: '',
      categorias: ['Trading'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: "https://thinkingheads.com/wp-content/uploads/2018/07/jose-ajram-conferenciante.jpg",
      votadoPor: [1, 2, 3], //array de ids
      usuarioId: 1
    },
    {
      nombre: 'Roberto Gamboa',
      descripcion: '',
      categorias: ['marketing digital'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: " https://s03.s3c.es/imag/_v0/770x420/f/5/3/700x420_ROBERTO-defini.png",
      votadoPor: [1], //array de ids
      usuarioId: 2
    },
    {
      nombre: 'Willyrex',
      descripcion: '',
      categorias: ['NFTs'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: "https://estaticos-cdn.sport.es/clip/6fc2b974-35f4-42c5-a13e-cd751b47ce7d_media-libre-aspect-ratio_default_0.jpg",
      votadoPor: [1, 2], //array de ids
      usuarioId: 2
    }
  ]
  // class Vendehumo
  // constructor(public id: string){}  
}
