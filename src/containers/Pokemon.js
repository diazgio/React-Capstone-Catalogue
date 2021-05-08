/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { fetchPokemonDetails } from '../actions/getData';
import toFirstCharUppercase from '../constant/constant';

const Pokemon = props => {
  const { match } = props;
  const detail = useSelector(state => state.detail);
  const { pokedetail, loading } = detail;
  const dispatch = useDispatch();
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokedetail.id}.png`;
  console.log(detail);

  useEffect(() => {
    dispatch(fetchPokemonDetails(match.params.pokemonId));
  }, []);

  return (
    <div className="container-detail">
      {!loading ? (
        <div>
          <Typography variant="h1">
            {`${pokedetail.id}.`}
            {toFirstCharUppercase(pokedetail.name)}
            <img src={pokedetail.sprites.front_default} />
          </Typography>
          <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} />
          <Typography variant="h3">Pokemon Info</Typography>
          <Typography>
            {'Species: '}
            <Link to={pokedetail.species.url}>{pokedetail.name}</Link>
          </Typography>
          <Typography>Height: {pokedetail.height} </Typography>
          <Typography>Weight: {pokedetail.weight} </Typography>
          <Typography variant="h6"> Types:</Typography>
          {pokedetail.types.map(typeInfo => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}> {`${name}`}</Typography>;
          })}
          <Link to="/">
            back to pokedex
          </Link>
        </div>
      ) : (
        <h1>Pokemon Not Found</h1>)}
    </div>
  );
};

export default Pokemon;
