import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productUrl = 'api/products.josn'; //api url will go here
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl).pipe(
      tap((data) => console.table(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    //log error here
    let errorMessage = '';

    //if client side error
    if (err.error instanceof ErrorEvent) {
      errorMessage = `error: ${err.error.message}`;
    } else {
      //server side error
      errorMessage = `server error code: ${err.status}, error: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
