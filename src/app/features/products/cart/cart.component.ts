import { Component, computed, effect, inject, signal } from '@angular/core';
import { Products } from '../../../core/models/products';
import { Cart } from './model/cart';
import { CartService } from './services/cart.service';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  imports: [MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart = inject(CartService);
}
