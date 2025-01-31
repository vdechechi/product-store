import { Component, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../shared/interfaces/product.interface';



@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  product : Product = inject(ActivatedRoute).snapshot.data['product'];

  productsService =  inject(ProductsService)

  matsnackBar = inject(MatSnackBar)

  router = inject(Router)

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: Validators.required
    }),
  });

  onSubmit() {

    this.productsService
    .Put(this.product.id, {
        title: this.form.controls.title.value

      }).subscribe(()=>{

        this.matsnackBar.open("Sucesso ao criar um novo produto!!", "Ok!");

        this.router.navigateByUrl('/');



    })
  }

}
