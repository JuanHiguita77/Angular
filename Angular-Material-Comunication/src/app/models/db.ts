import { IPokemon } from "./IPokemon.interface";

export const POKEMONS: IPokemon[] = [
    {
		name: 'Bulbasaur',
		description:
			'Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.',
		image: 'assets/bulbasaur.png'
	},
	{
		name: 'Charmander',
		description: 'La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.',
		image: 'assets/charmander.png'
	},
	{
		name: 'Squirtle',
		description: 'Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.',
		image: 'assets/squirtle.png'
	},
	{
		name: 'Pikachu',
		description:
			'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
		image: 'assets/pikachu.png'
	},
	{
		name: 'Jigglypuff',
		description:
			'Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.',
		image: 'assets/jigglypuff.png'
	}
]