import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography} from "@mui/material";
import React from "react";
import './PokemonCard.css';
import {Pokemon} from "../../types/pokemon";

type Props = {
    item: Pokemon,
}

export const PokemonCard: React.FC<Props> = ({item}) => {
    return (
            <Card sx={{ maxWidth: 345, maxHeight: 400, backgroundColor: '#755EDF'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.sprites.other.dream_world.front_default}
                        alt="green iguana"
                        sx={{height: 300, objectFit: 'contain', paddingTop: '20px'}}
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
                            {item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    )
}
