import React from "react";
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {Pokemon} from "../../types/pokemon";
import {Forms} from "../Forms";
import './PokemonsList.css';

type Props = {
    typeList: string[],
    pokemonType: string,
    setPokemonType:  React.Dispatch<React.SetStateAction<string>>,
    pokemon: Pokemon[],
    loading: boolean,
}

export const PokemonsList: React.FC<Props> = ({
  loading,
  pokemon,
  typeList,
  setPokemonType,
  pokemonType,
}) => {
    return (
        <div className="app_container">
            <Forms typeList={typeList} setPokemonType={setPokemonType} pokemonType={pokemonType}/>
            <div className="card_container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                pokemon.map((item) => (
                    <PokemonCard key={item.id} item={item}/>
                ))
            )}
             </div>
            <div className="btn-group">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}
