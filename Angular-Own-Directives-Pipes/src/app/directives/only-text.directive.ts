import { Directive, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true
})
export class OnlyTextDirective {

  //Instancia del ngModel que se genera al usar ngModel en la etiqueta html
  ngControl = inject(NgControl, { optional: true })

  //Un listener de eventos
  @HostListener('input', ['$event']) onInput(event: Event)
  {
    const inputElement = event.target as HTMLInputElement
    const value = inputElement.value
    const regex = /^[a-zA-Z\s]*$/

    if(!regex.test(value))
    {
      const cleanValue = value.replace(/[^a-zA-Z\s]*$/g, '')
      inputElement.value = cleanValue 

      //Para que los valores reactivos usen el filtro tambien
      //? es un ternario para validar que no sea null
      this.ngControl?.control?.setValue(cleanValue)
    }
  }
}
