import React, {useEffect, useState} from 'react';
import * as pokemonService from './api/pokemon'
import {Pokemon, ShortObjectInfo} from "./types/pokemon";
import {Route, Routes, useSearchParams} from "react-router-dom";
import {PokemonCharacter} from "./components/PokemonCharacter/PokemonCharacter";
import {Header} from "./components/Header/Header";
import './App.css';
import {PokemonsList} from "./components/PokemonsList/PokemonsList";
import {Forms} from "./components/Forms";

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeName = searchParams.get('name') || '';
  const [pokemonFullInfo, setPokemonFullInfo] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [typeList, setTypeList] = useState<string[]>([]);
  const [pokemonType, setPokemonType] =useState('');

    console.log(pokemonType)

  const getPokemons = async (shortPokemonList: ShortObjectInfo[]) => {
      const pokemonFullInfoList: Pokemon[] = [];
      await Promise.all(shortPokemonList.map(async(item: ShortObjectInfo) => {
          const pokemon = await pokemonService.getPokemonByName(item.name)
          pokemonFullInfoList.push(pokemon)
        }))
      const sortedPokemonList = pokemonFullInfoList.sort((a, b) => a.id - b.id)
      setPokemonFullInfo(sortedPokemonList);
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      if (event.target.value === '') {
          params.delete('name')
      } else {
          params.set('name', event.target.value)
      }
      setSearchParams(params)
  }

  const fetchPokemons = async() => {
      setLoading(true)

      if (pokemonType) {
          const shortPokemonListRes = await pokemonService.getPokemonByType(pokemonType)
         const res =  shortPokemonListRes.pokemon.map((item) => {
             return item.pokemon
         })
          await getPokemons(res);
      } else {
          const shortPokemonListRes = await pokemonService.getPokemons()
          await getPokemons(shortPokemonListRes.results);
      }

      await pokemonService.getPokemonType()
          .then((data) => {
              const typeArray = data.results.map((item) => {
                  return item.name
              })
              setTypeList(typeArray)
          })

      setLoading(false)
  }

  useEffect(() => {

      fetchPokemons()

  }, [pokemonType]);


  return (
      <>
      <Header />
          <div className="content">
      <Routes>
        <Route
            path='/'
            element={
            <PokemonsList
                typeList={typeList}
                pokemonType={pokemonType}
                setPokemonType={setPokemonType}
                pokemon={pokemonFullInfo}
                loading={loading}
            />}
        >
        </Route>
        <Route path='/pokemon/info/:name' element={<PokemonCharacter />}>
        </Route>
      </Routes>
          </div>
      </>
  );
}
