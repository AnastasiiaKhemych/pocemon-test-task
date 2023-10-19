import React, { Fragment, useEffect, useState } from "react";
import * as pokemonService from "../../api/pokemon";
import { Pokemon } from "../../types/pokemon";
import { Link, useParams } from "react-router-dom";
import "./pokemonCharacter.css";
import Box from "@mui/material/Box";
import { Button, Container, Paper } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const PokemonCharacter = () => {
  const [dataPokemon, setDataPokemon] = useState<Pokemon>();
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      pokemonService
        .getPokemonByName(name)
        .then((data) => setDataPokemon(data));
    }
  }, [name]);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={24}
          sx={{ maxWidth: "1000px", marginTop: "100px", width: "100%" }}
        >
          <div className="pokemon_container">
            <div className="pokemon_wrapper">
              <div className="left-content">
                <h1 className="poke_title">{dataPokemon?.name}</h1>
                <div className="base_stat">
                  {dataPokemon?.stats.map((item) => (
                    <Fragment key={`${item.stat.name}-${item.base_stat}`}>
                      <h3 style={{ margin: "10px 0 10px 0" }}>
                        {item.stat.name}: {item.base_stat}
                      </h3>
                      <Box sx={{ position: "relative" }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={item.base_stat}
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
              </div>
            </div>
          </div>
        </Paper>
      </Container>
      <Link
        to={`/`}
        style={{
          display: "flex",
          justifyContent: "end",
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            position: "absolute",
            bottom: "100px",
            right: "100px",
          }}
        >
          <ExitToAppIcon sx={{}} />
        </Button>
      </Link>
    </>
  );
};
