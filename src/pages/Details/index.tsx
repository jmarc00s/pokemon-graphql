import React from 'react';
import { Link, useMatch } from '@tanstack/react-location';
import { useQuery } from '@apollo/client';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import PokemonTable from '../../components/PokemonTable';
import { GET_POKEMON_BY_ID } from '../../graphql/querys/pokemon-by-id';
import { Container } from './style';

const DetailsPage = () => {
  const {
    params: { pokemonId },
  } = useMatch();

  const { data, loading } = useQuery(GET_POKEMON_BY_ID, {
    variables: { pokemonId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Heading>Details of pokemon: {data?.pokemon.name}</Heading>
      <Link to="/">Go to home</Link>
      {data && (
        <Container>
          <PokemonCard pokemon={data.pokemon} />
          <PokemonTable data={data.pokemon} />
        </Container>
      )}
    </section>
  );
};

export default DetailsPage;
