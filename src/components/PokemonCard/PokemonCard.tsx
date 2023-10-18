import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography} from "@mui/material";
import React, {useState} from "react";
import './PokemonCard.css';
import {Pokemon} from "../../types/pokemon";
import {Link} from "react-router-dom";

export const colorsType: any = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#BB2F27',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6',
    shadow: '#3F4171',
    unknown: '#3C3837',
};

type Props = {
    item: Pokemon,
}

export const PokemonCard: React.FC<Props> = ({item}) => {
    const pokemonType = item.types[0].type.name;
    console.log(pokemonType);
    console.log(colorsType[pokemonType])

    return (
        <Link to={`/pokemon/info/${item.name}`} style={{ textDecoration: 'none' }}>
            <Card sx={{
                maxWidth: 345,
                maxHeight: 500,
                padding: '16px',
                backgroundColor: colorsType[pokemonType]
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={item.sprites.other.dream_world.front_default}
                        alt="green iguana"
                        sx={{height: 250, objectFit: 'contain', paddingTop: '20px'}}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                textTransform: 'uppercase',
                                paddingTop: '20px',
                        }}
                        >
                            {item.name} #{item.id}
                        </Typography>
                        <Typography>
                        <div className="abilities">
                            {item?.abilities.map((poke) => (
                                <div className="group" key="poke">
                                    <p>{poke.ability.name}</p>
                                </div>
                            ))}
                        </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}
