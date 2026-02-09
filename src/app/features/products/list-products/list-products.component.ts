import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { Products } from '../../../core/models/products';
import { MockService } from '../../../core/service/mock.service';
import { AsyncPipe } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-list-products',
  imports: [MatIconModule,MatButtonModule, MatCardModule, AsyncPipe,MatGridListModule,],
  templateUrl: './list-products.component.html',
})
export class ListProductsComponent implements OnInit {
  private mockService = inject(MockService);
  private cartService = inject(CartService);

  isLoading = true;

  products$: Observable<Products[]> =  of([]);


  ngOnInit()
  {
    this.products$ = this.mockService.getAllProducts().pipe(
      tap(() => this.isLoading = true),
      finalize(() => this.isLoading = false),
      catchError(err => {
      return of([]);
    })
    )
  }
  addCart(product:Products){
    this.cartService.addItem({id: product.id, product: product, quantity:1})
  }
}
