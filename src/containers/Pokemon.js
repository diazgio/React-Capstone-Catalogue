import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { fetchPokemonDetails } from '../actions/getData';
import toFirstCharUppercase from '../constant/constant';

const Pokemon = (props) => {
  const { match } = props;
  const pokeID = match.params.pokemonId;
  const detail = useSelector((state) => state.detail);
  console.log(detail);
  const { pokedetail, loading } = detail;
  const dispatch = useDispatch();
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokedetail.id}.png`;

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokeID));
  }, []);

  return (
    <div className="container-detail">
      {!loading && !!detail ? (
        <div className="detailCard">
          <div className="detail-title">
            <h1>
              {`${pokedetail.id}.`}
              {toFirstCharUppercase(pokedetail.name)}
            </h1>
            <img src={pokedetail.sprites.front_default} alt="pokemonLogo" />
          </div>
          <img className="detail-image" src={fullImageUrl} alt="pokemonImage" />
          <Typography variant="h3">Pokemon Info</Typography>
          <Typography>
            {'Species: '}
            <Link className="detail-link" to={pokedetail.species.url}>{pokedetail.name}</Link>
          </Typography>
          <Typography className="details">
            Height:
            {' '}
            {pokedetail.height}
            {' '}
          </Typography>
          <Typography className="details">
            Weight:
            {' '}
            {pokedetail.weight}
            {' '}
          </Typography>
          <div className="types-cont">
            <Typography variant="h6"> Types:</Typography>
            {pokedetail.types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              // eslint-disable-next-line react/jsx-one-expression-per-line
              return <Typography key={name} className="detail-types"> {`${name}`}</Typography>;
            })}
          </div>
          <Link to="/" className="backbtn">
            back to pokedex
          </Link>
        </div>
      ) : (
        <div>
          <h1>Pokemon Not Found</h1>
          <img src=".https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7-yFH2sIlZAkCDB8_jcV040NBr4blWq-cTC81hqyQzLW4wAfm7M8Igbp4thtcOKu944&usqp=CAU" alt="pokemonpensante" />
        </div>
      )}
    </div>
  );
};

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};

export default Pokemon;
