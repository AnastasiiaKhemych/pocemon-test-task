import React from "react";
import {ShortPokemonInfo} from "../../types/pokemon";
import { Link } from 'react-router-dom';
import './PokemonList.css';
import TextField from '@mui/material/TextField';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type Props = {
    pokemons: ShortPokemonInfo[],
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    activeName: string,
}

export const PokemonList: React.FC<Props> = ({
    pokemons,
    handleNameChange,
    activeName,
}) => {
    return (
        <div className="list_container">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                    sx={{
                        m: 1,
                        minWidth: 400,
                        width: '100%',
                        '& .MuiInputBase-root': {
                            paddingRight: 0,
                        },
                    }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="medium"
                    value={activeName}
                    onChange={handleNameChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type"
                        size="medium"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
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
        </div>
    )
}
