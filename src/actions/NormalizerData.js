const NormalizerData = apiData => {
  const response = apiData.map(pokemon => (
    { name: pokemon.name, url: pokemon.url, id: parseInt(pokemon.url.split('/')[6], 10) }
  ));
  return response;
};

export default NormalizerData;
