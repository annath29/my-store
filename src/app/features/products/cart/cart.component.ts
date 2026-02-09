import { Component, inject } from '@angular/core';
import { CartService } from './services/cart.service';
import {  MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  imports: [MatDialogTitle,
    MatDialogContent,],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart = inject(CartService);// traigo el carrito para poder mostrar los elementos 
}
