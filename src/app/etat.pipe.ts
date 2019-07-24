import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etat'
})
export class EtatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {


    return value === 'paid' ? 'Payé' : value;
  }

}
