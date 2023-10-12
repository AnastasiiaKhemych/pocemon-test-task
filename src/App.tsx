import React, {useEffect, useState} from 'react';
import * as pokemonService from './api/pokemon'
import {ShortPokemonInfo} from "./types/pokemon";
import {Route, Routes, useSearchParams} from "react-router-dom";
import {PokemonCharacter} from "./components/PokemonCharacter/PokemonCharacter";
import {PokemonList} from "./components/PokemonList/PokemonList";
import {Header} from "./components/Header/Header";
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pokemons, setPokemons] = useState<ShortPokemonInfo[]>([]);
  const activeName = searchParams.get('name') || '';

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      if (event.target.value === '') {
          params.delete('name')
      } else {
          params.set('name', event.target.value)
      }
      setSearchParams(params)
  }

  useEffect(() => {
    pokemonService.getPokemons()
        .then((data) => setPokemons(data.results))
  },[])

  return (
      <div className="app_container">
      <Header />
      <Routes>
        <Route
            path='/'
            element={
            <PokemonList
                pokemons={pokemons}
                handleNameChange={handleNameChange}
                activeName={activeName}
            />}
        >
        </Route>
        <Route path='/pokemon/info/:name' element={<PokemonCharacter />}>
        </Route>
      </Routes>
      </div>
  );
}

export default App;
