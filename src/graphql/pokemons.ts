import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 10) {
      id
      name
    }
  }
`;
