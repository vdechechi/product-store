import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
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
