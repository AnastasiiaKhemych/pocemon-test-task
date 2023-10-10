import {ShortPokemonInfo, ResponseInfo, Pokemon} from '../types/pokemon';
import { client } from '../utils/fetchClient';

export const getPokemons = (): Promise<ResponseInfo<ShortPokemonInfo>> => {
    return client.get<ResponseInfo<ShortPokemonInfo>>(`/pokemon`);
};

export const getPokemonByName = (name: string ): Promise<Pokemon> => {
    return client.get<Pokemon>(`/pokemon/${name}`)
};

