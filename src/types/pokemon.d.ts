export interface IPokemon {
    name: string;
}

export interface IPokemonData extends IPokemon {
    types: {type: {name: string}}[]
    stats: {base_stat: number, stat: {name: string}}[]
}