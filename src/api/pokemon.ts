import {ShortObjectInfo, ResponseInfo, Pokemon, PokemonTypesInfo} from '../types/pokemon';
import { client } from '../utils/fetchClient';

export const getPokemons = async ({
   limit,
   offset,
} : {
    limit?: number,
    offset?: number,
}): Promise<ResponseInfo<ShortObjectInfo>> => {
    const params = new URLSearchParams();

    if (limit) {
        params.append('limit', limit.toString())
    }

    if (offset) {
        params.append('offset', offset.toString())
    }

    return await client.get<ResponseInfo<ShortObjectInfo>>(`/pokemon?${params.toString()}`)
};

export const getPokemonByName = (name: string ): Promise<Pokemon> => {
    return client.get<Pokemon>(`/pokemon/${name}`)
};

export const getPokemonType = (): Promise<ResponseInfo<ShortObjectInfo>> => {
    return client.get<ResponseInfo<ShortObjectInfo>>(`/type`);
}

export const getPokemonByType = (pokemonType: string): Promise<PokemonTypesInfo> => {
    return client.get<PokemonTypesInfo>(`/type/${pokemonType}`)
}

