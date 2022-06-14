import { Link, useNavigate, useRouter } from '@tanstack/react-location';
import React from 'react';
import { Pokemon } from '../../models/pokemon';
import { Container, PokemonImage, PokemonName } from './styles';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate({ to: `/details/${pokemon.id}` });
  };

  return (
    <Container data-testid="pokemon-card" onClick={handlePokemonClick}>
      <PokemonImage src={pokemon.image} />
      <PokemonName>{pokemon.name}</PokemonName>
    </Container>
  );
};

export default PokemonCard;
