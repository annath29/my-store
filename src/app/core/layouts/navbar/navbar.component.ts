import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../../../features/products/cart/cart.component';
@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly dialog = inject(MatDialog);

  openCart(): void {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '60%',
    });
  }
}
