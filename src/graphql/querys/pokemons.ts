import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 50) {
      id
      name
      image
    }
  }
`;
