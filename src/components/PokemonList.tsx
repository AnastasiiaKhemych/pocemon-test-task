import React from "react";
import {ShortPokemonInfo} from "../types/pokemon";
import { Link } from 'react-router-dom';
import './PokemonList.css';

type Props = {
    pokemons: ShortPokemonInfo[],
}

export const PokemonList: React.FC<Props> = ({pokemons, }) => {
    return (
        <>
        {pokemons.map((pokemon) => (
                <Link
                    to={`/pokemon/info/${pokemon.name}`}
                    key={pokemon.name}
                    className="box"
                >
                    {pokemon.name}
                </Link>
            )
        )}
        </>
    )
}
