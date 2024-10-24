import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../../models/pokemon.interface';

@Component({
	selector: 'app-pokemon',
	standalone: true,
	imports: [MatCardModule, MatButton],
	templateUrl: './pokemon.component.html',
	styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
	//@Input() indica que la propiedad pokemon puede recibir datos desde el componente padre.

	@Input({ required: true }) pokemon?: IPokemon;

	//@Output() indica que el componente hijo emitirá un evento
	@Output() deletePokemon = new EventEmitter();
}
