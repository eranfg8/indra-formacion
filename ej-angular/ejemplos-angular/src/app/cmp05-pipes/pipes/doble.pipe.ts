import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, desc?: number): number {
    let result: number = value * 2
    desc ? result -= desc : result
    return result
  }


  

}
