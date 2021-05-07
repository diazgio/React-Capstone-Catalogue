/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Card, CardMedia, CardContent, CircularProgress, Typography, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '../components/Pagination';
import toFirstCharUppercase from '../constant/constant';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=24&limit=24');
  const [prevUrl, setPrevUrl] = useState(null);
  const [filter, setFilter] = useState('');

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    let cancel;
    axios
      .get(currentUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c),
      })
      .then(response => {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          };
        });
        setPokemonData(newPokemonData);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
      });
    return () => cancel();
  }, [currentUrl]);

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPrevPage = () => {
    setCurrentUrl(prevUrl);
  };

  const PokemonCard = pokemonId => {
    const { id, name, sprite } = pokemonData[pokemonId];

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
    <div>
      <div className="SearchBar">
        <SearchIcon />
        <TextField
          label="Pokemon"
          onChange={handleSearchChange}
        />
      </div>
      {pokemonData ? (
        <div className="pokecontainer">
          {Object.keys(pokemonData).map(pokemonId => pokemonData[pokemonId].name.includes(filter) && PokemonCard(pokemonId))}
        </div>
      ) : (
        <CircularProgress />
      )}
      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />
    </div>
  );
};

export default Pokedex;
