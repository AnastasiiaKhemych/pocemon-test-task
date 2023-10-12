import React from "react";
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {Pokemon} from "../../types/pokemon";

type Props = {
    pokemon: Pokemon[],
    loading: boolean,
}

export const PokemonsList: React.FC<Props> = ({loading, pokemon}) => {
    return (
        <div className="card_container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                pokemon.map((item) => (
                    <PokemonCard key={item.id} item={item}/>
                ))
            )}
        </div>
    )
}
