import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  transform(value: string,): string {
  /*  const array = value.split('')
    const arrayReverse = array.reverse()
    return arrayReverse.join('')
*/
    return value.split('').reverse().join('') //Lo mismo de arriba pero en una sola linea
  }
}

//{{'hola mundo' | reverse}} => debe salir 'odnud aloh'