import {ShortObjectInfo, ResponseInfo, Pokemon} from '../types/pokemon';
import { client } from '../utils/fetchClient';

export const getPokemons = (): Promise<ResponseInfo<ShortObjectInfo>> => {
    return client.get<ResponseInfo<ShortObjectInfo>>(`/pokemon`);
};

export const getPokemonByName = (name: string ): Promise<Pokemon> => {
    return client.get<Pokemon>(`/pokemon/${name}`)
};

export const getPokemonType = (): Promise<ResponseInfo<ShortObjectInfo>> => {
    return client.get<ResponseInfo<ShortObjectInfo>>(`/type`);
}

