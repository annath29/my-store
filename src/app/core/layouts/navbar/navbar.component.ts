import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
 imports: [MatButtonModule,
  MatIconModule
 ],
 templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
