import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MockService } from '../../../core/service/mock.service';
import { Products } from '../../../core/models/products';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './customer-search.component.html',
})
export class CustomerSearchComponent {
  private mockService = inject(MockService);

  isLoading:boolean= false;
  searchControl = new FormControl<string>('');

  filteredOptions$: Observable<Products[]> = this.searchControl.valueChanges.pipe(
    debounceTime(400), // tiempo de espera
    distinctUntilChanged(), //evita busqueda de textos iguales
    switchMap((value) => {
      const term = value?.trim()
      if (!term || term.length < 3) return of([]); 
      this.isLoading =true
      return this.mockService.searchProduct(term).pipe(
      finalize(() => this.isLoading = false) );
    }),
  );

  displayFn(product: Products): string {
    return product && product.name ? product.name : '';
  }

  // private _filter(name: string): Products[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }
}
