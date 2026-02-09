import { computed, effect, Injectable, signal } from '@angular/core';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //declaracion del signal para los items del carrito de compras
  private _items = signal<Cart[]>([]);
  items = this._items.asReadonly();

  // metodo para agregar productos
  addItem(product: Cart) {
    const currentItems = this._items();
    const existingIndex = currentItems.findIndex(item => item.id === product.id);

    if (existingIndex >= 0) {
      const updatedItems = [...currentItems];
      updatedItems[existingIndex].quantity! += product.quantity ?? 1;// si ya existe, aumentamos la cantidad
      this._items.set(updatedItems);
    } else {
      this._items.set([...currentItems, { ...product, quantity: product.quantity ?? 1 }]);// se agrega si no esta
    }
  }


  totalPrice = computed(() => 
    this._items().reduce((sum, item) => sum + item.product.price * (item.quantity ?? 1), 0)//se calcula el total segun el precio y la cantidad del producto
  );

  totalCount = computed(() => 
    this._items().reduce((sum, item) => sum + (item.quantity ?? 1), 0)
  );

  //efecto que muestra el precio total
  constructor() {
    effect(() => {
      console.log('Carrito actualizado:', this._items());
      console.log('Total Items:', this.totalCount(), 'Total Price:', this.totalPrice());
    });
  }
}
