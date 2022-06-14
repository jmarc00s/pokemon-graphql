import { getPokemons } from '../../graphql/querys/pokemons';

export const mocks = [
  {
    request: {
      query: getPokemons,
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
