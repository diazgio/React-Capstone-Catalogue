import detailReducer from '../reducers/getDetailsReducer';

describe('Detail Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const mockFetching = false;
    const state = detailReducer(mockState, mockAction, mockFetching);
    expect(state).toStrictEqual({
      pokedetail: [],
      loading: true,
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        pokedetail: [],
        active: 'Some Active details',
      };
      const mockAction = { type: 'any' };
      const state = detailReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        pokedetail: [],
        active: 'Some Active details',
      });
    },
  );
});
