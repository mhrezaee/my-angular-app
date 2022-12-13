import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Products';
  imageWidth: number = 70;
  imageMargin: number = 2;
  showImage: boolean = false;
  searchTerm: string = '';
  products: IProduct[] = [
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

  ngOnInit(): void {
    console.log('method init not implemented!');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
