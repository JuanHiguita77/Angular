import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NumberSymbol, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-info',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe, DecimalPipe],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.scss'
})
export class ShowInfoComponent {
  persons = 
  [
    {
      name: 'JUan',
      surname: 'yepes',
      birthDate: '2001-11-17',
      salary: 13213,
      decimal: 2133.31
    },
    {
      name: 'JUan',
      surname: 'YEPES',
      birthDate: '2001-11-17',
      salary: 13213.33,
      decimal: 2133.312
    },
    {
      name: 'JUan',
      surname: 'yepes',
      birthDate: '2001-11-17',
      salary: 13213.33,
      decimal: 2133.312
    },
  ]
}
