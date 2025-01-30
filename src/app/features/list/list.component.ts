import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[] = []; // Lista de produtos

  // Injetamos o HttpClient no componente
  productService = inject(ProductsService);

  ngOnInit(){

    this.productService.GetAll().subscribe((products =>{
      this.products = products
    }))


  }
}
