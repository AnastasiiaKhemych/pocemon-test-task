import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
    typeList: string[],
    setPokemonType:  React.Dispatch<React.SetStateAction<string>>,
    pokemonType: string
}

export const Forms: React.FC<Props> = ({typeList, setPokemonType, pokemonType}) => {

    const handleChange = (event: SelectChangeEvent) => {
        setPokemonType(event.target.value as string);
    };
    return (
        <Box sx={{ maxWidth: 345, color: '#755EDF', marginLeft: '100px', paddingTop: '50px'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    value={pokemonType}
                    onChange={handleChange}
                >
                    {typeList.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
