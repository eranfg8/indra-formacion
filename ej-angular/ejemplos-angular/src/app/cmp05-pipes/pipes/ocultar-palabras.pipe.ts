import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>): string {

    for (let palabra of palabras) {
      //      const regExp = new RegExp(palabra, 'gim')
      //    value = value.replace(regExp, '*'.repeat(palabra.length))
    }
    //return value

    let res = value.split(' ')
    palabras.forEach(palabra => {
      res.forEach(element => {
        if (element == palabra) {
          value = value.replace(palabra, '*'.repeat(palabra.length))
        }
      });

    });
    return value
  }
}

//{{'no se si me va a tocar la loteria' | ocultarPalabras['no', 'si']}} => '** se ** me va a tocar la loteria
// 'Penny...' repeat(3)