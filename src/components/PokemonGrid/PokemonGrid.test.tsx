import PokemonGrid from '.';
import { screen } from '@testing-library/react';
import { Pokemon } from '../../models/pokemon';
import { renderTheme } from '../../styles/renderTheme';

const POKEMONS: Pokemon[] = [
  {
    id: '1',
    image: 'src/img.jpg',
    name: 'Bulbasaur',
  },
];

describe('<PokemonGrid />', () => {
  beforeEach(() => {
    renderTheme(<PokemonGrid pokemons={POKEMONS} />);
  });

  it('should render PokemonGrid', () => {
    expect(screen.findAllByText('Bulbasaur')).toBeTruthy();
  });

  it('should render correct number of pokemon cards', () => {
    const pokemonCardElements = screen.getAllByTestId('pokemon-card');
    expect(pokemonCardElements.length).toBe(POKEMONS.length);
  });
});
