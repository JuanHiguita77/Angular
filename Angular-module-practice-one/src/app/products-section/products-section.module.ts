import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSectionComponent } from './products-section.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsSectionComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsSectionComponent
  ]
})
export class ProductsSectionModule { }
