import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/index'

@Pipe({
  name: 'terminados',
  pure: false,
})
export class TerminadosPipe implements PipeTransform {

  transform(listas: Lista[], estado:boolean = true):Lista[] {
    let nuevaLista:Lista[] = [];

    for(let lista of listas) {
      if(lista.terminada === estado ){
        nuevaLista.push(lista);
      }
    }
    return nuevaLista;
  }

}
