type pokemonsType = 'grass' | 'water' | 'fire' | 'bug' | 'poison' | 'flying';

export interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    [key: string]: number;
  };
  types: pokemonsType[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface IPokemons {
  total: number;
  pokemons: IPokemon[];
}

export type ITypes = string[];
