import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  // lista de productos
  private products: Array<Products> = [
    {
      id: 1,
      name: 'Camiseta blanca',
      price: 35000,
      image: 'https://ejemplo.com/img/camiseta1.jpg',
      stock: 15,
    },
    {
      id: 2,
      name: 'Camiseta negra',
      price: 37000,
      image: 'https://ejemplo.com/img/camiseta2.jpg',
      stock: 12,
    },
    {
      id: 3,
      name: 'Jeans azul',
      price: 89000,
      image: 'https://ejemplo.com/img/jeans1.jpg',
      stock: 8,
    },
    {
      id: 4,
      name: 'Jeans negro',
      price: 95000,
      image: 'https://ejemplo.com/img/jeans2.jpg',
      stock: 10,
    },
    {
      id: 5,
      name: 'Tenis deportivos blancos',
      price: 120000,
      image: 'https://ejemplo.com/img/tenis1.jpg',
      stock: 20,
    },
    {
      id: 6,
      name: 'Tenis deportivos negros',
      price: 125000,
      image: 'https://ejemplo.com/img/tenis2.jpg',
      stock: 18,
    },
    {
      id: 7,
      name: 'Chaqueta de cuero',
      price: 220000,
      image: 'https://ejemplo.com/img/chaqueta1.jpg',
      stock: 5,
    },
    {
      id: 8,
      name: 'Chaqueta de jean',
      price: 180000,
      image: 'https://ejemplo.com/img/chaqueta2.jpg',
      stock: 7,
    },
    {
      id: 9,
      name: 'Gorra negra',
      price: 25000,
      image: 'https://ejemplo.com/img/gorra1.jpg',
      stock: 30,
    },
    {
      id: 10,
      name: 'Gorra blanca',
      price: 23000,
      image: 'https://ejemplo.com/img/gorra2.jpg',
      stock: 25,
    },
    {
      id: 11,
      name: 'Vestido rojo',
      price: 150000,
      image: 'https://ejemplo.com/img/vestido1.jpg',
      stock: 9,
    },
    {
      id: 12,
      name: 'Vestido azul',
      price: 145000,
      image: 'https://ejemplo.com/img/vestido2.jpg',
      stock: 11,
    },
    {
      id: 13,
      name: 'Pantalón de lino',
      price: 95000,
      image: 'https://ejemplo.com/img/pantalon1.jpg',
      stock: 14,
    },
    {
      id: 14,
      name: 'Pantalón de algodón',
      price: 85000,
      image: 'https://ejemplo.com/img/pantalon2.jpg',
      stock: 16,
    },
    {
      id: 15,
      name: 'Camisa formal blanca',
      price: 70000,
      image: 'https://ejemplo.com/img/camisa1.jpg',
      stock: 20,
    },
    {
      id: 16,
      name: 'Camisa formal azul',
      price: 75000,
      image: 'https://ejemplo.com/img/camisa2.jpg',
      stock: 18,
    },
    {
      id: 17,
      name: 'Bolso de cuero',
      price: 120000,
      image: 'https://ejemplo.com/img/bolso1.jpg',
      stock: 6,
    },
    {
      id: 18,
      name: 'Bolso de tela',
      price: 85000,
      image: 'https://ejemplo.com/img/bolso2.jpg',
      stock: 10,
    },
    {
      id: 19,
      name: 'Reloj deportivo',
      price: 200000,
      image: 'https://ejemplo.com/img/reloj1.jpg',
      stock: 8,
    },
    {
      id: 20,
      name: 'Reloj casual',
      price: 180000,
      image: 'https://ejemplo.com/img/reloj2.jpg',
      stock: 12,
    },
  ];

  // busca el producto por el nombre y retorna lo que encontro con un  tiempo de demora para simular el tiempo de respuesta del server

  searchProduct(term: string): Observable<Products[]> {
    const filtered = this.products.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase()),
    );

    return of(filtered).pipe(delay(800)); // retorna todos los objetos de tipo products encontrados
  }
}
