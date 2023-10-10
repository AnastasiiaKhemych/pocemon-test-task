export interface ShortPokemonInfo {
    name: string,
    url: string,
}

export interface ResponseInfo<T> {
    count: number,
    next: string | null,
    previous: string | null,
    results: T[],
}
//
//
// interface AbilityWrapper {
//     is_hidden: boolean,
//     slot: number,
//     ability: Ability,
// }

interface DreamWorld {
    front_default: string,
}

interface Other {
    dream_world: DreamWorld,
}

interface VersionGroupDetails {
    level_learned_at: number,
    version_group: ShortPokemonInfo,
    move_learn_method: ShortPokemonInfo,
}

interface Moves {
    move: ShortPokemonInfo,
    version_group_details: VersionGroupDetails[],
}

interface Stats {
    base_stat: number,
    effort: number,
    stat: ShortPokemonInfo,
}

interface Sprites {
    other: Other,
}
interface Types {
    type: ShortPokemonInfo,
}

export interface Pokemon {
    id: number,
    name: string,
    moves: Moves[],
    stats: Stats[],
    sprites: Sprites,
    types: Types[],
}
