import { gql } from '@apollo/client';
export const GET_POKEMON_BY_ID = gql`
  query getPokemonById($pokemonId: String!) {
    pokemon(id: $pokemonId) {
      id
      name
      image
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      classification
    }
  }
`;
