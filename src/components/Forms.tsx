import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  typeList: string[];
  setPokemonType: React.Dispatch<React.SetStateAction<string>>;
  pokemonType: string;
};

export const Forms: React.FC<Props> = ({
  typeList,
  setPokemonType,
  pokemonType,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === undefined) {
      setPokemonType("");
    } else {
      setPokemonType(event.target.value as string);
    }
  };

  return (
    <Box sx={{ mixWidth: 345, padding: "50px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type"
          value={pokemonType}
          onChange={handleChange}
        >
          <MenuItem>None</MenuItem>
          {typeList.map((item) => (
            <MenuItem
              key={item}
              value={item}
              sx={{ textTransform: "uppercase" }}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
