import { gql } from '@apollo/client';

export const getPokemons = gql`
  query getPokemons($quantity: Int!) {
    pokemons(first: $quantity) {
      id
      name
      image
    }
  }
`;
