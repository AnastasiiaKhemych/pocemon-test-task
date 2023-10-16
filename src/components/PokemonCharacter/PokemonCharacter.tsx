import React, {useEffect, useState} from "react";
import * as pokemonService from '../../api/pokemon'
import {Pokemon} from "../../types/pokemon";
import {Link, useParams} from "react-router-dom";
import './pokemonCharacter.css';
import Box from "@mui/material/Box";
import {Slider} from "@mui/material";

export const PokemonCharacter = () => {
    const [dataPokemon, setDataPokemon] = useState<Pokemon>();
    const {name} = useParams()

    useEffect(() => {
        if (name) {
            pokemonService.getPokemonByName(name)
                .then((data) => setDataPokemon(data))
        }
    }, [name])

    return (
            <>
               <div className="pokemon_container">
                   <div className="left-content">
                       <h1 className="poke_title">{dataPokemon?.name}</h1>
                       <div className="base_stat">
                           {dataPokemon?.stats.map((item) => (
                               <>
                                   <h2 key={item.base_stat}>{item.stat.name}</h2>
                                   <Box sx={{ width: 300 }}>
                                       <Slider
                                           aria-label="Temperature"
                                           defaultValue={item.base_stat}
                                           color="secondary"
                                           sx={{
                                               '& .MuiSlider-thumb': {
                                                   display: 'none'
                                               }
                                           }}
                                       />
                                   </Box>
                               </>
                           ))}
                       </div>
                   </div>
                   <div className="right-content">
                       <img
                           src={dataPokemon?.sprites.other.dream_world.front_default}
                           className="right_img"
                       />
                       <div className="abilities">
                           {dataPokemon?.abilities.map((poke) => (
                               <div className="group" key="poke">
                                   <h2>{poke.ability.name}</h2>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
            </>
    )
}
