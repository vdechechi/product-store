import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductsService } from '../../shared/services/products.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule], 
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'] 
})
export class CreateComponent {

  productsService =  inject(ProductsService)

  matsnackBar = inject(MatSnackBar)

  routerService = inject(Router)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
  });

  onSubmit() {

    
    this.productsService.Post(
      {
        title: this.form.controls.title.value

      }).subscribe(()=>{

        this.matsnackBar.open("Sucesso ao criar um novo produto!!", "Ok!");

        this.routerService.navigateByUrl('/');



    })
  }

 }
