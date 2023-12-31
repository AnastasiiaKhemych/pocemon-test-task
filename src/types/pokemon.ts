export interface ShortObjectInfo {
  name: string;
  url: string;
}

export interface ResponseInfo<T> {
  count: number;
  next: string | null;
  previous: string | null;
  limit?: number;
  offset?: number;
  results: T[];
}

export interface PokemonType {
  pokemon: ShortObjectInfo;
  slot: number;
}

export interface PokemonTypesInfo {
  id: number;
  pokemon: PokemonType[];
}

interface DreamWorld {
  front_default: string;
}

interface Other {
  dream_world: DreamWorld;
}

interface VersionGroupDetails {
  level_learned_at: number;
  version_group: ShortObjectInfo;
  move_learn_method: ShortObjectInfo;
}

interface Moves {
  move: ShortObjectInfo;
  version_group_details: VersionGroupDetails[];
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: ShortObjectInfo;
}

interface Sprites {
  other: Other;
}
interface Types {
  type: ShortObjectInfo;
}

interface Abilities {
  ability: ShortObjectInfo;
}
export interface Pokemon {
  id: number;
  abilities: Abilities[];
  name: string;
  moves: Moves[];
  stats: Stats[];
  sprites: Sprites;
  types: Types[];
}
