import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {
  //para asignar la diectiva agregamos el selector a la etiqueta html "appDemo"

  //Inyeccion de dependencias para directivas
  private element: ElementRef<HTMLInputElement> = inject(ElementRef)

  constructor(private renderer: Renderer2) 
  {
    console.log(this.element);
  }
}
