import { screen } from '@testing-library/react';
import PokemonCard from '.';
import { LocationProvider } from '../../config/routes/mock-location-provider';
import { Pokemon } from '../../models/pokemon';
import { renderTheme } from '../../styles/renderTheme';

const POKEMON_MOCK: Pokemon = {
  id: '1',
  name: 'bulbasaur',
  image: 'src/pokemon.jpg',
};

describe('<PokemonCard />', () => {
  beforeEach(() => {
    renderTheme(
      <LocationProvider>
        <PokemonCard pokemon={POKEMON_MOCK} />
      </LocationProvider>
    );
  });

  it('should render <PokemonCard />', () => {
    const element = screen.getByTestId('pokemon-card');
    expect(element).toBeInTheDocument();
  });

  it('should show correct pokemon name', () => {
    const element = screen.getByText(POKEMON_MOCK.name);
    expect(element).toBeInTheDocument();
  });
});
