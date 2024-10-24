import { Component } from '@angular/core';
import { POKEMONS } from '../models/db';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [MatButtonModule, MatListModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {
  //Copy the array
  pokemons = [...POKEMONS]

  clickRestore()
  {
    alert('restore')  
  }
}
