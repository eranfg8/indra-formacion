import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
 // pure: false --- No es eficiente
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    return value.filter(item => item.includes(filtro))
  }

}
