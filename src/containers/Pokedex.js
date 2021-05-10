/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, CardMedia, CardContent, Typography, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fetchPokemonAsync, fetchNextPagePokemon } from '../actions/getData';
import Pagination from '../components/Pagination';

let url = 'https://pokeapi.co/api/v2/pokemon?limit=24';

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
  const page = useSelector(state => state.page);
  const pokemon = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };

  const nextPage = () => {
    url = page.next;
    dispatch(fetchPokemonAsync(url));
  };
  const previousPage = () => {
    if (page.previous) {
      url = page.previous;
      dispatch(fetchPokemonAsync(url));
    }
  };

  useEffect(() => {
    dispatch(fetchNextPagePokemon(url));
  }, [url]);

  useEffect(() => {
    dispatch(fetchPokemonAsync(url));
  }, [url]);

  return (
    <div>
      <div className="SearchBar">
        <SearchIcon />
        <TextField
          className="input-search"
          label="Pokemon"
          onChange={handleSearchChange}
        />
        <Pagination
          nextPage={nextPage ? nextPage : null}
          previousPage={previousPage ? previousPage : null}
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
                  <Typography>
                    {p.id}. {p.name}
                  </Typography>
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
