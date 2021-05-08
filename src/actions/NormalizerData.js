const NormalizerData = apiData => {
  const response = apiData.map(pokemon => (
    { name: pokemon.name, url: pokemon.url, id: parseInt(pokemon.url.split('/')[6], 10) }
  ));
  return response;
};

const NormalizerPokemons = (apidata, name) => {
  const { pokemon } = apidata;
  const newPoke = NormalizerData(pokemon.map(p => p.pokemon));
  return ({
    [name]: {
      ...apidata,
      pokemon: newPoke,
    },
  });
};

export { NormalizerData, NormalizerPokemons };
