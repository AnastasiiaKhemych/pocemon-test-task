import React, {useEffect, useState} from 'react';
import * as pokemonService from './api/pokemon'
import {ShortPokemonInfo} from "./types/pokemon";
import {Route, Routes} from "react-router-dom";
import { PokemonCharacter } from "./components/PokemonCharacter";
import {PokemonList} from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState<ShortPokemonInfo[]>([]);

  useEffect(() => {
    pokemonService.getPokemons()
        .then((data) => setPokemons(data.results))
  },[])

  return (
      <Routes>
        <Route
            path='/'
            element={<PokemonList pokemons={pokemons}/>}>
        </Route>
        <Route path='/pokemon/info/:name' element={<PokemonCharacter />}>
        </Route>
      </Routes>
  );
}

export default App;
