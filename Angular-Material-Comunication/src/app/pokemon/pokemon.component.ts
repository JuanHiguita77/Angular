import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { IPokemon } from '../models/IPokemon.interface';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  //required: needs received data from father component
  //Input: send dad info to son
  @Input({required:true}) pokemon?: IPokemon

  //EventEmitter Instance
  @Output() deletePokemon = new EventEmitter()
}
