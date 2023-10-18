import React from "react";
import {PokemonCard} from "../PokemonCard/PokemonCard";
import {Pokemon} from "../../types/pokemon";
import {Forms} from "../Forms";
import './PokemonsList.css';
import { SuperBalls } from '@uiball/loaders'
import { Pagination } from '../Pagination/Pagination';

type Props = {
    typeList: string[],
    pokemonType: string,
    setPokemonType:  React.Dispatch<React.SetStateAction<string>>,
    pokemon: Pokemon[],
    loading: boolean,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setRowsPerPage:  React.Dispatch<React.SetStateAction<number>>
    rowsPerPage: number,
    totalRows: number,
}

export const PokemonsList: React.FC<Props> = ({
  loading,
  pokemon,
  typeList,
  setPokemonType,
  pokemonType,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalRows,
}) => {
    return (
        <div className="app_container">
            <Forms typeList={typeList} setPokemonType={setPokemonType} pokemonType={pokemonType}/>
            <div className="card_container">
            {loading ? (
                <div className="loader">
                <SuperBalls
                    size={200}
                    speed={1.4}
                    color="black"
                />
                </div>
            ) : (
                pokemon.map((item) => (
                    <PokemonCard key={item.id} item={item}/>
                ))
            )}
                <Pagination
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    pokemon={pokemon}
                />
             </div>
        </div>
    )
}
