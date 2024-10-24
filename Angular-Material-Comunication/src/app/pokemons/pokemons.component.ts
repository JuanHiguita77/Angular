import { Component,Input } from '@angular/core';
import { POKEMONS } from '../models/db';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { IPokemon } from '../models/IPokemon.interface';
import { PokemonComponent } from "../pokemon/pokemon.component";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [MatButtonModule, MatListModule, PokemonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {
  //Copy the array
  pokemons = [...POKEMONS]
  pokemonSelected?: IPokemon

  clickRestore()
  {
      this.pokemons = POKEMONS
  }

  //Receibe a pokemon entity
  clickPokemon(pokemon: IPokemon):void {
    this.pokemonSelected = pokemon
  }

  deletePokemon(pokemon: IPokemon): void{
    const index = this.pokemons.indexOf(this.pokemonSelected!)

    if(index > 0)
    {
      this.pokemons.splice(index, 1)
      this.pokemonSelected = undefined
    }
  }
}
