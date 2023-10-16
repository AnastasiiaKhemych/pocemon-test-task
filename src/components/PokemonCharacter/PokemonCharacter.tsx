import React, {Fragment, useEffect, useState} from "react";
import * as pokemonService from '../../api/pokemon'
import {Pokemon} from "../../types/pokemon";
import {useParams} from "react-router-dom";
import './pokemonCharacter.css';
import Box from "@mui/material/Box";
import {Container, Paper, Slider} from "@mui/material";

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
                <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'center'}}>
                    <Paper elevation={24} sx={{maxWidth: '1000px', marginTop: '100px', width: '100%'}}>
               <div className="pokemon_container">
                      <div className="pokemon_wrapper">
                          <div className="left-content">
                              <h1 className="poke_title">{dataPokemon?.name}</h1>
                              <div className="base_stat">
                                  {dataPokemon?.stats.map((item) => (
                                      <Fragment key={`${item.stat.name}-${item.base_stat}`}>
                                          <h2>{item.stat.name}</h2>
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
                                      </Fragment>
                                  ))}
                              </div>
                          </div>
                          <div className="right-content">
                              <img
                                  src={dataPokemon?.sprites.other.dream_world.front_default}
                                  className="right_img"
                                  alt="Pokemon img"
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
                   {/*<Link to={`/`} style={{marginTop: '550px', marginRight: '50px'}}>*/}
                   {/*    <Button variant="contained" size="large">*/}
                   {/*        Go Back*/}
                   {/*    </Button>*/}
                   {/*</Link>*/}
               </div>
                    </Paper>
                </Container>
            </>
    )
}
