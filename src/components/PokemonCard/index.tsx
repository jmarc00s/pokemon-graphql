import { Link } from '@tanstack/react-location';
import React from 'react';
import { Pokemon } from '../../models/pokemon';
import { Container, PokemonImage, PokemonName } from './styles';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link to={`/details/${pokemon.id}`}>
      <Container data-testid="pokemon-card">
        <PokemonImage src={pokemon.image} />
        <PokemonName>{pokemon.name}</PokemonName>
      </Container>
    </Link>
  );
};

export default PokemonCard;
