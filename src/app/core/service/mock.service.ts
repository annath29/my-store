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
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609461/PruebaNebula/camisaBlanca_d5xgvo.webp',
      stock: 15,
    },
    {
      id: 2,
      name: 'Camiseta negra',
      price: 37000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609461/PruebaNebula/camisetanegra_lipt51.webp',
      stock: 12,
    },
    {
      id: 3,
      name: 'Jeans azul',
      price: 89000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609460/PruebaNebula/jeanazul_oeqi1b.webp',
      stock: 8,
    },
    {
      id: 4,
      name: 'Jeans negro',
      price: 95000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609460/PruebaNebula/jeans-para-mujer-tennis-negro_pu6rdt.webp',
      stock: 10,
    },
    {
      id: 5,
      name: 'Tenis deportivos blancos',
      price: 120000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609462/PruebaNebula/tenisblancos_ibbjty.webp',
      stock: 20,
    },
    {
      id: 6,
      name: 'Tenis deportivos negros',
      price: 125000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609461/PruebaNebula/tenisnegros_v1safy.jpg',
      stock: 18,
    },
    {
      id: 7,
      name: 'Chaqueta de cuero',
      price: 220000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609460/PruebaNebula/chaquetacuero_lv9uhf.webp',
      stock: 5,
    },
    {
      id: 8,
      name: 'Chaqueta de jean',
      price: 180000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609460/PruebaNebula/chaquetajean_nwsopg.webp',
      stock: 7,
    },
    {
      id: 9,
      name: 'Gorra negra',
      price: 25000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609467/PruebaNebula/gorrangra_oxzgbd.webp',
      stock: 30,
    },
    {
      id: 10,
      name: 'Gorra blanca',
      price: 23000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609464/PruebaNebula/gorrablanca_b1pkwk.webp',
      stock: 25,
    },
    {
      id: 11,
      name: 'Vestido rojo',
      price: 150000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609463/PruebaNebula/vestidorojo_xlmjjt.jpg',
      stock: 9,
    },
    {
      id: 12,
      name: 'Vestido azul',
      price: 145000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609463/PruebaNebula/vestidoazul_y8byaq.jpg',
      stock: 11,
    },
    {
      id: 13,
      name: 'Pantalón de lino',
      price: 95000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609462/PruebaNebula/pantalon_de_lino_jzxkst.webp',
      stock: 14,
    },
    {
      id: 14,
      name: 'Pantalón de algodón',
      price: 85000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609488/PruebaNebula/pantalgodon_y2b8tg.jpg',
      stock: 16,
    },
    {
      id: 15,
      name: 'Camisa formal blanca',
      price: 70000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609484/PruebaNebula/formalblanca_dttdsx.jpg',
      stock: 20,
    },
    {
      id: 16,
      name: 'Camisa formal azul',
      price: 75000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609495/PruebaNebula/formalazul_fq4whr.jpg',
      stock: 18,
    },
    {
      id: 17,
      name: 'Bolso de cuero',
      price: 120000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609488/PruebaNebula/bolsocuero_ln3tky.png',
      stock: 6,
    },
    {
      id: 18,
      name: 'Bolso de tela',
      price: 85000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609492/PruebaNebula/bolsatela_jqdqjw.jpg',
      stock: 10,
    },
    {
      id: 19,
      name: 'Reloj deportivo',
      price: 200000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609489/PruebaNebula/relojdeportivo_zlxxv8.jpg',
      stock: 8,
    },
    {
      id: 20,
      name: 'Reloj casual',
      price: 180000,
      image: 'https://res.cloudinary.com/dwvdzy8xq/image/upload/v1770609486/PruebaNebula/relojcasual_n6jogm.webp',
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

  getAllProducts(): Observable<Products[]> {
    return of (this.products).pipe(delay(800))
  }
}
