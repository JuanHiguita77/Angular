import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
