/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, CardMedia, CardContent, CircularProgress, Typography, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fetchPokemonAsync } from '../actions/getData';

const useStyles = makeStyles(() => ({
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  const pokemon = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPokemonAsync());
  }, []);

  return (
    <div>
      <div className="SearchBar">
        <SearchIcon />
        <TextField
          className="input-search"
          label="Pokemon"
          onChange={handleSearchChange}
        />
      </div>
      <div className="pokecontainer">
        {pokemon ? pokemon.map(p => (
          p.name.includes(filter) && (
            <div className="pokecard" key={p.name}>
              <Card className="poke-data">
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                  style={{ width: '130px', height: '130px' }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography>{p.name}</Typography>
                </CardContent>
                <Link className="info-link" to={`${p.id}`}>Info</Link>
              </Card>
            </div>
          )
        )) : <p>Hi</p>}
      </div>
    </div>
  );
};

export default Pokedex;
