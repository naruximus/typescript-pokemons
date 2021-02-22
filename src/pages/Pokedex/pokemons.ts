type pokemonsType = 'grass' | 'water' | 'fire' | 'bug' | 'poison' | 'flying';

export interface IPokemons {
  nameClean: string;
  abilities: string[];
  stats: {
    [key: string]: number;
  };
  types: pokemonsType[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

export const pokemons: IPokemons[] = [
  {
    nameClean: 'bulbasaur',
    abilities: ['overgrow', 'chlorophyll'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      'special-attack': 65,
      'special-defense': 65,
      speed: 45,
    },
    types: ['grass', 'poison'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'bulbasaur',
    baseExperience: 64,
    height: 7,
    id: 1,
    isDefault: true,
    order: 1,
    weight: 69,
  },
  {
    nameClean: 'ivysaur',
    abilities: ['overgrow', 'chlorophyll'],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      'special-attack': 80,
      'special-defense': 80,
      speed: 60,
    },
    types: ['grass', 'poison'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    name: 'ivysaur',
    baseExperience: 142,
    height: 10,
    id: 2,
    isDefault: true,
    order: 2,
    weight: 130,
  },
  {
    nameClean: 'venusaur',
    abilities: ['overgrow', 'chlorophyll'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      'special-attack': 100,
      'special-defense': 100,
      speed: 80,
    },
    types: ['grass', 'poison'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    name: 'venusaur',
    baseExperience: 236,
    height: 20,
    id: 3,
    isDefault: true,
    order: 3,
    weight: 1000,
  },
  {
    nameClean: 'charmander',
    abilities: ['blaze', 'solar-power'],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      'special-attack': 60,
      'special-defense': 50,
      speed: 65,
    },
    types: ['fire'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    name: 'charmander',
    baseExperience: 62,
    height: 6,
    id: 4,
    isDefault: true,
    order: 5,
    weight: 85,
  },
  {
    nameClean: 'charmeleon',
    abilities: ['blaze', 'solar-power'],
    stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      'special-attack': 80,
      'special-defense': 65,
      speed: 80,
    },
    types: ['fire'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    name: 'charmeleon',
    baseExperience: 142,
    height: 11,
    id: 5,
    isDefault: true,
    order: 6,
    weight: 190,
  },
  {
    nameClean: 'charizard',
    abilities: ['blaze', 'solar-power'],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      'special-attack': 109,
      'special-defense': 85,
      speed: 100,
    },
    types: ['fire', 'flying'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    name: 'charizard',
    baseExperience: 240,
    height: 17,
    id: 6,
    isDefault: true,
    order: 7,
    weight: 905,
  },
  {
    nameClean: 'squirtle',
    abilities: ['torrent', 'rain-dish'],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      'special-attack': 50,
      'special-defense': 64,
      speed: 43,
    },
    types: ['water'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    name: 'squirtle',
    baseExperience: 63,
    height: 5,
    id: 7,
    isDefault: true,
    order: 10,
    weight: 90,
  },
  {
    nameClean: 'wartortle',
    abilities: ['torrent', 'rain-dish'],
    stats: {
      hp: 59,
      attack: 63,
      defense: 80,
      'special-attack': 65,
      'special-defense': 80,
      speed: 58,
    },
    types: ['water'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    name: 'wartortle',
    baseExperience: 142,
    height: 10,
    id: 8,
    isDefault: true,
    order: 11,
    weight: 225,
  },
  {
    nameClean: 'blastoise',
    abilities: ['torrent', 'rain-dish'],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      'special-attack': 85,
      'special-defense': 105,
      speed: 78,
    },
    types: ['water'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    name: 'blastoise',
    baseExperience: 239,
    height: 16,
    id: 9,
    isDefault: true,
    order: 12,
    weight: 855,
  },
  {
    nameClean: 'caterpie',
    abilities: ['shield-dust', 'run-away'],
    stats: {
      hp: 45,
      attack: 30,
      defense: 35,
      'special-attack': 20,
      'special-defense': 20,
      speed: 45,
    },
    types: ['bug'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    name: 'caterpie',
    baseExperience: 39,
    height: 3,
    id: 10,
    isDefault: true,
    order: 14,
    weight: 29,
  },
];