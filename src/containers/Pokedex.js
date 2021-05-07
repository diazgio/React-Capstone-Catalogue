/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardMedia, CardContent, CircularProgress, Typography,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import Categories from '../components/Categories';
import mockData from '../components/mockData';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
}));

// eslint-disable-next-line arrow-body-style
const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  const toFirstCharUppercase = name => name.charAt(0).toUpperCase() + name.slice(1);

  const PokemonCard = pokemonId => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="pokecard" key={pokemonId}>
        <Card className="poke-data">
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: '130px', height: '130px' }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
          <Link className="info-link" to={`/${pokemonId}`}>Info</Link>
        </Card>
      </div>
    );
  };

  return (
    <>
      <Categories />
      {pokemonData ? (
        <div className="pokecontainer">
          {Object.keys(pokemonData).map(pokemonId => PokemonCard(pokemonId))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
