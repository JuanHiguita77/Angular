import { Component } from '@angular/core';
import IProduct from '../../../interfaces/IProduct.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    products: IProduct[] = [
    {
      title: 'Crema Hidratante Facial',
      image: 'assets/images/cards/card-1.jpg',
      price: 25000,
      link: 'https://example.com/crema-hidratante'
    },
    {
      title: 'Labial Matte Rojo',
      image: 'assets/images/cards/card-2.jpg',
      price: 15000,
      link: 'https://example.com/labial-matte'
    },
    {
      title: 'Base de Maquillaje 30ml',
      image: 'assets/images/cards/card-3.jpg',
      price: 35000,
      link: 'https://example.com/base-maquillaje'
    },
    {
      title: 'Sombras de Ojos Paleta',
      image: 'assets/images/cards/card-3.jpg',
      price: 42000,
      link: 'https://example.com/sombras-paleta'
    },
    {
      title: 'Corrector Líquido',
      image: 'assets/images/cards/card-2.jpg',
      price: 12000,
      link: 'https://example.com/corrector-liquido'
    },
    {
      title: 'Esmalte para Uñas Rosa',
      image: 'assets/images/cards/card-1.jpg',
      price: 8000,
      link: 'https://example.com/esmalte-rosa'
    }
  ];  
}
