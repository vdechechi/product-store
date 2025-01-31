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

  GetById(id: string) {
    return this.httpClient.get<Product>('/api/products/' + id)
  }

  Post(payload: ProductPayload){
    return this.httpClient.post('/api/products', payload)
  }

  Put(id: string, payload: ProductPayload){
    return this.httpClient.put('/api/products/'+ id , payload)
  }

  Delete(id: string){

    return this.httpClient.delete('/api/products/' + id)

  }

  

 
}
