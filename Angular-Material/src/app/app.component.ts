import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Podemos importar el boton a usar o todo el modulo de botones
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Material';
}
