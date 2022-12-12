import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Products';
  products: any[] = [
    {
      id: 3,
      name: 'Monitor',
      code: 'PC-003',
      releaseDate: '20.12.2020',
      description: '24 inch monitor!',
      price: 150.99,
      rate: 4.2,
      imageUrl: 'assets/images/monitor.png',
    },
    {
      id: 7,
      name: 'Keyboard',
      code: 'PC-007',
      releaseDate: '15.08.2021',
      description: 'a very nice keyboard!',
      price: 81.99,
      rate: 4.8,
      imageUrl: 'assets/images/keyboard.png',
    },
  ];
}
