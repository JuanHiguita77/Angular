import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContainerComponent, HeaderComponent], //Componentes, directivas, y pipes del modulo
  imports: [CommonModule, NotificationModule, FormsModule], // Modulos que necesitan los componentes del modulo
  exports: [ContainerComponent], // Elementos que se exportan del modulo("declarations") para usarlos en otros modulos
  providers: [], // Servicios que pueden ser usados en cualquier parte de la aplicacion
  bootstrap: [] // Define la vista principal de la aplicacion. Solo utilizado por el root module
})
export class ContainerModule { }


