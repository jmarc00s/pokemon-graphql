import React from 'react';
import { Pokemon } from '../../models/pokemon';
import { Container, PokemonImage, PokemonName } from './style';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Container data-testid="pokemon-card">
      <PokemonImage src={pokemon.image} />
      <PokemonName>{pokemon.name}</PokemonName>
    </Container>
  );
};

export default PokemonCard;
