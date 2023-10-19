import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../types/pokemon";
import { Forms } from "../Forms";
import "./PokemonsList.css";
import { SuperBalls } from "@uiball/loaders";
import { Pagination } from "../Pagination/Pagination";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

type Props = {
  typeList: string[];
  pokemonType: string;
  setPokemonType: React.Dispatch<React.SetStateAction<string>>;
  pokemon: Pokemon[];
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  totalRows: number;
};

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
    <>
      <div>
        <Forms
          typeList={typeList}
          setPokemonType={setPokemonType}
          pokemonType={pokemonType}
        />
        <Box sx={{ width: "100%", padding: "48px", justifyContent: "center" }}>
          {loading ? (
            <div className="loader">
              <SuperBalls size={200} speed={1.4} color="black" />
            </div>
          ) : (
            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
              {pokemon.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <PokemonCard item={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </div>
      {pokemonType === "" && !loading && (
        <Pagination
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRows={totalRows}
        />
      )}
    </>
  );
};
