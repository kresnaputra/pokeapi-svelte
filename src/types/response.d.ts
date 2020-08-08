import type { IPokemon } from "./pokemon";

export interface IResponsePokemon{
    count: number;
    next: string;
    previous: string | null;
    results: IPokemon[];
}