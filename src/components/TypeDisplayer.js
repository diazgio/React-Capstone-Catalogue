/* eslint-disable arrow-parens */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const TypeDisplayer = ({ arrayPoke }) => {
  const classes = useStyles();
  const { pokemon } = arrayPoke;
  return (
    <div className="pokecontainer">
      {pokemon.map((p) => (
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
      ))}
    </div>
  );
};

TypeDisplayer.propTypes = {
  arrayPoke: PropTypes.object.isRequired,
};

export default TypeDisplayer;
