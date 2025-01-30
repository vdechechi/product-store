import { inject, Injectable } from '@angular/core';

import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient)

  GetAll(){
    return this.httpClient.get<Product[]>('/api/products')

  }

  constructor() { }
}
