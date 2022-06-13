import React from 'react';
import { Pokemon } from '../../models/pokemon';
import PokemonCard from '../PokemonCard';
import { GridContainer } from './styles';

interface PokemonGridProps {
  pokemons: Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <GridContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </GridContainer>
  );
};

export default PokemonGrid;
