import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = {
      id: id,
      name: 'Monitor',
      code: 'PC-003',
      releaseDate: '20.12.2020',
      description: '24 inch monitor!',
      price: 150.99,
      rate: 4.2,
      imageUrl: 'assets/images/monitor.png',
    };
  }
}
