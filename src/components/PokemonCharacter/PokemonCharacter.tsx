import React, {useEffect, useState} from "react";
import * as pokemonService from '../../api/pokemon'
import {Pokemon} from "../../types/pokemon";
import {Link, useParams} from "react-router-dom";
import './pokemonCharacter.css';

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
                <div className="wrapper">
                <div className="title">{name}</div>
            <img src={dataPokemon?.sprites.other.dream_world.front_default}/>
            <Link to={'/'} className="button">Back to list</Link>
                </div>
            </div>
    )
}
