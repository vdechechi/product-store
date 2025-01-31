import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductsService } from './shared/services/products.service';
import { inject } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'create',
        loadComponent: () => import('./features/create/create.component')
          .then(m => m.CreateComponent)
    },
    {
        path: 'edit/:id',
        resolve: {
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                const productService = inject(ProductsService);

                return  productService.GetById(route.params["id"])
            },
        },

        loadComponent: () => import('./features/edit/edit.component')
          .then(m => m.EditComponent)
    }
      
];
