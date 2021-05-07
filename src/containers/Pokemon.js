/* eslint-disable react/prop-types */
import React from 'react';

const Pokemon = props => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return (
    <div>
      <p>
        {`this is the pokemon ${pokemonId}`}
      </p>
    </div>
  );
};

export default Pokemon;
