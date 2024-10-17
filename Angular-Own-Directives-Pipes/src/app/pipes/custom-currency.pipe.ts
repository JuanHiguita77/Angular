import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, digitsInfo?: string): unknown {
  
    //wide o narrow para el simbolo
    const localeCurrencySimbol = getCurrencySymbol('es-CO', 'wide')!
    const digist = digitsInfo ? digitsInfo : '.2-2'

    return formatCurrency(value, 'es-CO', localeCurrencySimbol, 'CO', digist)
  }

}
