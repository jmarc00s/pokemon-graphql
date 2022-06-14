import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getPokemons } from '../../graphql/querys/pokemons';
import Heading from '../../components/Heading';
import PokemonGrid from '../../components/PokemonGrid';
import QuantitySelector from '../../components/QuantitySelector';

const HomePage = () => {
  const quantites = [10, 20, 50, 100, 200];

  const { data, loading, refetch } = useQuery(getPokemons, {
    variables: { quantity: quantites[0] },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleQuantitySelection = (quantity: number) => {
    refetch({ quantity });
  };

  return (
    <>
      <Heading>Pokedex with GraphQL</Heading>
      <QuantitySelector
        quantities={quantites}
        onQuantityClick={handleQuantitySelection}
      />
      <PokemonGrid pokemons={data.pokemons} />
    </>
  );
};

export default HomePage;
