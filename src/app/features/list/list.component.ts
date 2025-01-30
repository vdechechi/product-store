import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: any[] = []; // Lista de produtos

  // Injetamos o HttpClient no componente
  private httpClient = inject(HttpClient);

  ngOnInit(){
    axios.get('/api/products').then((response) => {
      
      this.products = response.data;

    }).catch((error) => {

      console.log(error);
    })
  };
}

