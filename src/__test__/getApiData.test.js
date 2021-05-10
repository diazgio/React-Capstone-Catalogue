import axios from 'axios';

describe('Api communications module', () => {
  it(
    '1. Checks the get Pokemon method',
    async () => {
      const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24').then(res => res);
      expect(data).toBeInstanceOf(Object);
    },
  );

  it(
    '2. Checks the get one Caetegory info method',
    async () => {
      const data = await axios.get('https://pokeapi.co/api/v2/type/').then(res => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
