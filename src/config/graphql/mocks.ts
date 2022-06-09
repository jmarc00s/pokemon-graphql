import { GET_POKEMONS } from '../../graphql/querys/pokemons';

export const mocks = [
  {
    request: {
      query: GET_POKEMONS,
    },
    result: {
      data: {
        pokemons: [
          {
            id: '1234',
            name: 'Bulbasaur',
          },
        ],
      },
    },
  },
];
