import { gql } from '@apollo/client';
export const GET_POKEMON_BY_ID = (pokemonId: string) => gql`
    query getPokemonById {
        pokemon(id: "${pokemonId}"){
            id
            name
            image
        }
    }
`;
