import { inject, Injectable } from '@angular/core';

import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { ProductPayload } from '../interfaces/payload.product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient)

  GetAll(){
    return this.httpClient.get<Product[]>('/api/products')
  }

  Post(payload: ProductPayload){
    return this.httpClient.post('/api/products', payload)
  }

  

 
}
