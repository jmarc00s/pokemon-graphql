import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/querys/pokemons';
import Heading from '../../components/Heading';
import PokemonGrid from '../../components/PokemonGrid';

const HomePage = () => {
  const { data, loading } = useQuery(GET_POKEMONS);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Heading>Pokedex with GraphQL</Heading>
      <PokemonGrid pokemons={data.pokemons} />
    </>
  );
};

export default HomePage;
