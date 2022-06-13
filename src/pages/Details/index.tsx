import { useQuery } from '@apollo/client';
import { useMatch } from '@tanstack/react-location';
import React from 'react';
import { GET_POKEMON_BY_ID } from '../../graphql/querys/pokemon-by-id';
import { Pokemon } from '../../models/pokemon';

const DetailsPage = () => {
  const {
    params: { pokemonId },
  } = useMatch();

  const { data, loading } = useQuery(GET_POKEMON_BY_ID(pokemonId));

  if (loading) {
    return <p>Carregando...</p>;
  }

  return <div>Detalhes do pokemon {data?.pokemon.name}</div>;
};

export default DetailsPage;
