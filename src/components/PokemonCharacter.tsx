import React, {useEffect, useState} from "react";
import * as pokemonService from '../api/pokemon'
import {Pokemon} from "../types/pokemon";
import {useParams} from "react-router-dom";

export const PokemonCharacter = () => {
    const [dataPokemon, setDataPokemon] = useState<Pokemon>();
    const {name} = useParams()

    useEffect(() => {
        if (name) {
            pokemonService.getPokemonByName(name)
                .then((data) => setDataPokemon(data))
        }
    }, [name])

    console.log(dataPokemon)
    return (
            <div className="container">
                <div>{name}</div>
            <img src={dataPokemon?.sprites.other.dream_world.front_default}/>
            </div>
    )
}
